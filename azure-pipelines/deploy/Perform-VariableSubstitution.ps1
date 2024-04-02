Param(
    [Parameter(Mandatory=$true)]
    [string] $xmlFilePath,

    [Parameter(Mandatory=$true)]
    [string] $pattern,

    [Parameter(Mandatory=$false)]
    [string] $identity_clisecret
)

function Perform-VariableSubstitution($xmlFilePath, $pattern, $newPattern) {
	$SEL = Select-String -Path $xmlFilePath -Pattern $pattern
	if( $SEL.Length -gt 0)
	{
		Write-Host 'Contains variable for substitution'
		$Content = Get-Content -Path $xmlFilePath -Raw
		$Target = $Content -replace $pattern,$newPattern
		$Target | Set-Content -Path $xmlFilePath
	}
	else
	{
		Write-Host 'Error: Does not contain variable for substitution'
        exit 1
	}
}

Perform-VariableSubstitution -xmlFilePath $xmlFilePath -pattern $pattern -newPattern $identity_clisecret