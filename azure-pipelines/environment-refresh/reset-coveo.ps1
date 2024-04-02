# Write-Output "Resetting Coveo encryption key..."

# Import-Module "SqlServer"

# $prefix = $OctopusParameters["Database.Prefix"]
# $database = "$($prefix)Web"
# $server = $OctopusParameters["Database.Server"]
# $username = $OctopusParameters["Database.Username"]
# $password = $OctopusParameters["Database.Password"]

# If ($prefix.StartsWith("AW930Prod_") -or $server.StartsWith("prod"))
# {
# 	Write-Error "This runbook should only be run against the development or stage environments"
# }

# Write-Output "Database: $database"
# Write-Output "Server:   $server"
# Write-Output "Username: $username"
# Write-Output "Password: $password"

# $command = "UPDATE dbo.Properties SET Value = 'avqlGT0CbpIzjO3nHOhNtq0DEUS61/8txKeCmrKwRPWv6pFt+GPFGd8EvlTiPxSM' WHERE ID = 'C2297EDE-FAF4-4FC4-9A21-DA7F7B33365E' AND [Key] = 'WEB_ENCRYPTIONKEYS'"
# Write-Highlight $command

# Invoke-Sqlcmd `
#     -ServerInstance $server `
#     -Database $database `
#     -Username $username `
#     -Password $password `
#     -Query $command
