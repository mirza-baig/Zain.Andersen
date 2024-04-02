# To run this locally, you will need to install the SqlServer module: Install-Module "SqlServer"

Param(
    [Parameter(Mandatory=$true)]
    [string] $prefix,

    [Parameter(Mandatory=$true)]
    [string] $token,

    # Specifies the names of the databases to copy. This should be a comma delimited string of names, e.g. "master,web".
    [Parameter(Mandatory=$true)]
    [String] $databaseNames
)

Write-Host "Deleting temp databases..."

Import-Module "SqlServer"

$server = "deventwb1sql1.database.windows.net"
$databases = $databaseNames.Split(",")
#$databases = @("core", "forms", "master", "web")
#$databases = @("core", "external", "forms", "master", "web")

If (-not ($prefix.StartsWith("dev_") -or $prefix.StartsWith("uat_")))
{
  Write-Host "##vso[task.logissue type=error]This runbook should only be run against the development or UAT environments"
  exit 1
}

Write-Host "##[group] Parameters"
Write-Host "Prefix:    $prefix"
Write-Host "Databases: $([string]::Join(", ", $databases))"
Write-Host "Server:    $server"
Write-Host "Token:     $token"
Write-Host "##[endgroup]"

$current = 1
$count = $databases.Count

foreach ($database in $databases) {
  $database = $prefix + $database + "_tmp"

  $progress = (($current - 1) / $count * 100.0)

  Write-Host "Deleting '$database' from $server (if it exists)"
  Write-Host "##vso[task.setprogress value=$progress;]Deleting $current of $count - '$database'"

  $command = "DROP DATABASE IF EXISTS [$database]"
  Write-Host "##[command]$command"

  Invoke-Sqlcmd `
    -ServerInstance $server `
    -AccessToken $token `
    -QueryTimeout 0 `
    -Query $command

  $current = $current + 1
}

Write-Host "##vso[task.setprogress value=100;]Done."
