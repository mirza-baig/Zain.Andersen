Param(
  [Parameter(Mandatory=$true)]
  [string] $name,

  [Parameter(Mandatory=$true)]
  [string] $resourceGroup,

  [Parameter()]
  [switch]$slot
)

if (!$slot) {
  Start-AzWebApp -Name $name -ResourceGroupName  $resourceGroup
} else {
  Start-AzWebAppSlot -Name $name -ResourceGroupName  $resourceGroup -Slot "staging"
}
