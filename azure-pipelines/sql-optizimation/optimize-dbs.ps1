<#
.SYNOPSIS
    This Azure Automation runbook automates index maintenance on Azure SQL.

.DESCRIPTION
    You should use this Runbook if you want to run index maintenance in a database on an Azure SQL.

.EXAMPLE
    Optimize-SqlIndexes -KeyVaultName "keyvault" -SqlServer "sql host name" -SqlUsername "sa" -SqlPasswordSecretName "sa-secret" -DatabaseNames "Core,External,Master,Web" -ReportOnly $true
#>

Param(
    # Specifies the name of the key vault to use for secrets.
    #[Parameter(Mandatory=$true)]
    #[String] $KeyVaultName,

    # Specifies the Azure SQL Server containing the databases.
    [Parameter(Mandatory=$true)]
    [String] $SqlServer,

    # Sepcifies the SQL port. Optional, default is 1433.
    [Parameter(Mandatory=$false)]
    [Int] $SqlServerPort = 1433,

    # Specifies a prefix to be applied to all database names. For example: AWDev_. Optional, default is ""
    [Parameter(Mandatory=$false)]
    [String] $DatabaseNamePrefix = "",

    # Specifies the names of the databases to run index maintenance on. This should be a comma delimited string of names, e.g. "Core,External,Master,Web".
    [Parameter(Mandatory=$true)]
    [String] $DatabaseNames,

    # Specifies which mode the script runs in. True = output the index reorganization or rebuild commands without running them. False = reorganize or rebuild the fragmented indexes.
    [Parameter(Mandatory=$true)]
    [Bool] $ReportOnly = $true,

    # Specifies the average fragmentation percentage threshold that will trigger a reorganize. Optional, default is 5.
    [Parameter(Mandatory=$false)]
    [Int] $FragmentationThresholdReorganize = 5,

    # Specifies the average fragmentation percentage threshold that will trigger a rebuild. Optional, default is 30.
    [Parameter(Mandatory=$false)]
    [Int] $FragmentationThresholdRebuild = 30,

    # Specifies the percentage of the data page to be filled up with index data. Optional, default is 90, recommended value range is 90-100.
    [Parameter(Mandatory=$false)]
    [Int] $IndexFillFactor = 90,

    # Specifies where the intermediate index results are sorted. True = TempDB. False = database's log file. Optional, default is True.
    [Parameter(Mandatory=$false)]
    [Bool] $SortInTempDB = $true,

    # Specifies the scanning mode for index statistics. Available Values: 'DEFAULT', NULL, 'LIMITED', 'SAMPLED', or 'DETAILED'. Optional, default is 'SAMPLED'.
    [Parameter(Mandatory=$false)]
    [String] $IndexStatisticsScanningMode = "'SAMPLED'",

    # Specifies wether the indexes should be rebuilt "online". Optional, default is True.
    [Parameter(Mandatory=$false)]
    [Bool] $RebuildOnline = $true
)

$ErrorActionPreference = 'stop'

Write-Output "Starting SQL index maintenance with the following parameters: "
Write-Output "SqlServer                        : $SqlServer"
Write-Output "SqlServerPort                    : $SqlServerPort"
Write-Output "DatabaseNamePrefix               : $DatabaseNamePrefix"
Write-Output "DatabaseNames                    : $DatabaseNames"
Write-Output "ReportOnly                       : $ReportOnly"
Write-Output "FragmentationThresholdReorganize : $FragmentationThresholdReorganize"
Write-Output "FragmentationThresholdRebuild    : $FragmentationThresholdRebuild"
Write-Output "IndexFillFactor                  : $IndexFillFactor"
Write-Output "SortInTempDB                     : $SortInTempDB"
Write-Output "IndexStatisticsScanningMode      : $IndexStatisticsScanningMode"
Write-Output "RebuildOnline                    : $RebuildOnline"
Write-Output " "

if ($ReportOnly -eq $true) {
    Write-Output "Running in report only mode, no changes will be made."
} else {
    Write-Output "Running in execution mode, changes will be made."
}

Write-Output " "

# Get an access token with the Service Pricipal used in the Azure DevOps Pipeline
Write-Host "Retrieving access token..." -ForegroundColor DarkGray
$accessToken = (Get-AzAccessToken -ResourceUrl https://database.windows.net).Token

# Setup variables
if ($SortInTempDB -eq $true) {
    $sortInTempDbString = "ON"
} else {
    $sortInTempDbString = "OFF"
}
if ($RebuildOnline -eq $true) {
    $rebuildOnlineString = "ON"
} else {
    $rebuildOnlineString = "OFF"
}

# Loop through the databases
foreach ($databaseName in $DatabaseNames.Split(",")) {
    $database = $DatabaseNamePrefix + $databaseName
    Write-Output " "
    Write-Output "--------------------------------------------------------------------------------"
    Write-Output " Performing maintenance on '$database'... "
    Write-Output "--------------------------------------------------------------------------------"

    Write-Output " "
    Write-Output "Connecting to the database on the Azure SQL Server..."
    $connectionString = "Server=tcp:$SqlServer,$SqlServerPort;Initial Catalog=$databaseName;Encrypt=True;TrustServerCertificate=False;Connection Timeout=60;"
    $Conn = New-Object System.Data.SqlClient.SqlConnection
    $Conn.ConnectionString = $connectionString
    $Conn.AccessToken = $accessToken
    $Conn.Open()

    Write-Output " "
    Write-Output "Getting index fragmentation information..."
    $SQLCommandString = @"
SELECT
    tbl.name as [TableName],
    SCHEMA_NAME(tbl.schema_id) as [SchemaName],
    idx.Name as [IndexName],
    CAST(CAST(pst.avg_fragmentation_in_percent as decimal(18,2)) as varchar(5)) + '%' as [AvgFragmentationPercentage],
    CASE WHEN pst.avg_fragmentation_in_percent > $FragmentationThresholdRebuild THEN
        'Rebuild'
    WHEN pst.avg_fragmentation_in_percent > $FragmentationThresholdReorganize AND pst.avg_fragmentation_in_percent <= $FragmentationThresholdRebuild THEN
        'Reorganize'
    ELSE
        'Nothing'
    END as [ActionRequired],
    CASE WHEN pst.avg_fragmentation_in_percent > $FragmentationThresholdRebuild THEN
        'ALTER INDEX [' + idx.Name + '] ON [' + DB_NAME() + '].[' + SCHEMA_NAME (tbl.schema_id) + '].[' + tbl.name + '] REBUILD WITH (FILLFACTOR = $IndexFillFactor, SORT_IN_TEMPDB = $sortInTempDbString, STATISTICS_NORECOMPUTE = OFF, ONLINE = $rebuildOnlineString);'
    WHEN pst.avg_fragmentation_in_percent > $FragmentationThresholdReorganize AND pst.avg_fragmentation_in_percent <= $FragmentationThresholdRebuild THEN
        'ALTER INDEX [' + idx.Name + '] ON [' + DB_NAME() + '].[' + SCHEMA_NAME (tbl.schema_id) + '].[' + tbl.name + '] REORGANIZE;'
    ELSE
        ''
    END as [Command]
FROM
    sys.dm_db_index_physical_stats(DB_ID(), NULL, NULL, NULL , $IndexStatisticsScanningMode) as pst
    INNER JOIN sys.tables as tbl ON pst.object_id = tbl.object_id
    INNER JOIN sys.indexes idx ON pst.object_id = idx.object_id AND pst.index_id = idx.index_id
WHERE
    pst.index_id != 0
    AND pst.alloc_unit_type_desc IN ( N'IN_ROW_DATA', N'ROW_OVERFLOW_DATA')
ORDER BY
    2, 1, 3, 4 DESC
"@
    $Cmd = New-Object system.Data.SqlClient.SqlCommand($SQLCommandString, $Conn)
    $Cmd.CommandTimeout = 120
    $IndexFragmentation = New-Object system.Data.DataSet
    $DataAdaptor = New-Object system.Data.SqlClient.SqlDataAdapter($Cmd)
    [void]$DataAdaptor.fill($IndexFragmentation)

    # Display fragmentation information
    $IndexFragmentation.Tables[0] | Select-Object TableName, IndexName, AvgFragmentationPercentage, ActionRequired | Format-Table -AutoSize | Out-String -Width 4096 | Write-Output

    Write-Output " "
    Write-Output "Optimizing indexes..."
    ForEach ($IndexData in $IndexFragmentation.Tables[0]) {
        $command = $IndexData.Item("Command")

        if ($command -ne "") {
            $indexName = $IndexData.Item("IndexName")
            $action = $IndexData.Item("ActionRequired").ToLower()

            if ($ReportOnly -eq $true) {
                Write-Output "Would run $action for '$indexName': $command"
            } else {
                Write-Output "Running $action for '$indexName': $command"
                Try {
                    $Cmd = New-Object system.Data.SqlClient.SqlCommand($command, $Conn)
                    $Cmd.CommandTimeout = 0
                    [void]$Cmd.ExecuteNonQuery()
                }
                Catch {
                    Write-Error "Error doing maintenance on index '$indexName'. $_"
                }
            }
        }
    }

    $Conn.Close()
}

Write-Output " "
Write-Output "Done."
