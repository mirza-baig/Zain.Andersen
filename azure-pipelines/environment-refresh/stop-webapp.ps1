Param(
  [Parameter(Mandatory=$true)]
  [string] $name,

  [Parameter(Mandatory=$true)]
  [string] $resourceGroup,

  [Parameter()]
  [switch]$slot
)

if (!$slot) {
  Stop-AzWebApp -Name $name -ResourceGroupName  $resourceGroup
} else {
  Stop-AzWebAppSlot -Name $name -ResourceGroupName  $resourceGroup -Slot "staging"
}
