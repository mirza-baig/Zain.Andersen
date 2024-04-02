Param(
  [Parameter(Mandatory=$true)]
  [string] $environment,
  [Parameter(Mandatory=$true)]
  [string] $buildnumber,
  [Parameter(Mandatory=$true)]
  [string] $repository
)

function Perform-VariableSubstitution($configFilePath, $pattern, $newPattern) {
	$SEL = Select-String -Path $configFilePath -Pattern $pattern
	if( $SEL.Length -gt 0)
	{
		Write-Host 'Contains variable for substitution'
		$Content = Get-Content -Path $configFilePath -Raw
		$Target = $Content -replace $pattern,$newPattern
		$Target | Set-Content -Path $configFilePath
	}
	else
	{
		Write-Host 'Error: Does not contain variable for substitution'
    exit 1
	}
}

Set-Location enterprise-deployment/manifests
if($environment -eq "dev")
{
	Write-Host "Updating Dev manifest for deployment!!"
	Perform-VariableSubstitution -configFilePath "id-dev.yaml" -pattern "enterpriseweb/enterpriseweb-id:latest-alpha" -newPattern "${repository}:${buildnumber}"

	# Write-Host "kubectl delete -f cm-dev.yaml"
	# Write-Host "kubectl apply -f cm-dev.yaml"

  # TODO: fix pattern
  kubectl delete -f id-dev.yaml
	kubectl apply -f id-dev.yaml
}
elseif ($environment -eq "uat")
{
	Write-Host "Updating Stage manifest for deployment!!"
	Perform-VariableSubstitution -configFilePath "id-uat.yaml" -pattern "enterpriseweb/enterpriseweb-id:latest" -newPattern "${repository}:${buildnumber}"

	# Write-Host "kubectl delete -f cm-uat.yaml"
	# Write-Host "kubectl apply -f cm-uat.yaml"

  # TODO: fix pattern
	kubectl delete -f id-uat.yaml
	kubectl apply -f id-uat.yaml
}
elseif ($environment -eq "prod")
{
	Write-Host "Updating Stage manifest for deployment!!"
	Perform-VariableSubstitution -configFilePath "id-prod.yaml" -pattern "enterpriseweb/enterpriseweb-id:latest" -newPattern "${repository}:${buildnumber}"

	# Write-Host "kubectl delete -f cm-prod.yaml"
	# Write-Host "kubectl apply -f cm-prod.yaml"

  # TODO: fix pattern
	kubectl delete -f id-prod.yaml
	kubectl apply -f id-prod.yaml
}
else
{
	Write-Error "Environment not defined!! Please check the pipeline!!"
}
