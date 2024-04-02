# To run this locally, you will need to install the SqlServer module: Install-Module "SqlServer"

Param(
    [Parameter(Mandatory=$true)]
    [string] $destinationPrefix,

    [Parameter(Mandatory=$true)]
    [string] $token,

    # Specifies the names of the databases to copy. This should be a comma delimited string of names, e.g. "master,web".
    [Parameter(Mandatory=$true)]
    [String] $databaseNames
)

Write-Host "Copying databases..."

Import-Module "SqlServer"

# Constants
$destinationServerName = "deventwb1sql1"
$destinationServer = "$destinationServerName.database.windows.net"
$sourceServerName = "prodentwb1sql1"
$sourceServer = "$sourceServerName.database.windows.net"
$sourcePrefix = "prod_"
$databases = $databaseNames.Split(",")
#$databases = @("core", "forms", "master", "web")
#$databases = @("core", "external", "forms", "master", "web")
$destinationPoolName = "deventwb1sql1pool1"

If (-not ($destinationPrefix.StartsWith("dev_") -or $destinationPrefix.StartsWith("uat_")))
{
  Write-Host "##vso[task.logissue type=error]This runbook should only be run against the development or UAT environments"
  exit 1
}

Write-Host "##[group] Parameters"
Write-Host "Databases:              $([string]::Join(", ", $databases))"
Write-Host "Source Prefix:          $sourcePrefix"
Write-Host "Source Server:          $sourceServer"
Write-Host "Destination Prefix:     $destinationPrefix"
Write-Host "Destination Server:     $destinationServer"
Write-Host "Destination Pool Name:  $destinationPoolName"
Write-Host "Token:                  $token"
Write-Host "##[endgroup]"

$current = 1
$count = $databases.Count

foreach ($database in $databases) {
  $sourceName = $sourcePrefix + $database
  $destinationName = $destinationPrefix + $database

  $progress = (($current - 1) / $count * 100.0)

  Write-Host ("Copying '$destinationName' database from '$sourceName'")
  Write-Host "##vso[task.setprogress value=$progress;]Copying $current of $count - '$destinationName'"

  $command = "CREATE DATABASE [$destinationName] AS COPY OF [$sourceServerName].[$sourceName] (SERVICE_OBJECTIVE = ELASTIC_POOL(name = $destinationPoolName))"
  Write-Host "##[command]$command"

  Invoke-Sqlcmd `
    -ServerInstance $destinationServer `
    -AccessToken $token `
    -QueryTimeout 0 `
    -Query $command

  # wait for the copied database to come online
  $status = ""
  while ($status -ne "ONLINE") {
    Start-Sleep -Seconds 10
    $status = (Invoke-Sqlcmd `
        -ServerInstance $destinationServer `
        -AccessToken $token `
        -QueryTimeout 0 `
        -Query "SELECT state_desc FROM sys.databases WHERE name = '$destinationName'").state_desc
  }

  # re-attach the SitecoreOwner login
  # $command = "ALTER USER SitecoreOwner WITH Login = SitecoreOwner"
  # Write-Host "##[command]$command"

  # Invoke-Sqlcmd `
  #   -ServerInstance $destinationServer `
  #   -AccessToken $token `
  #   -QueryTimeout 0 `
  #   -Query $command
  $current = $current + 1
}

Write-Host "##vso[task.setprogress value=100;]Done."
