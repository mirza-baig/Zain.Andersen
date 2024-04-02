Write-Host "Stopping Traefik..." -ForegroundColor Green
docker stop enterpriseweb-traefik-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container stop failed, see errors above."
}

Write-Host "Stopping Solr and SQL Server..." -ForegroundColor Green
docker stop enterpriseweb-solr-1 enterpriseweb-mssql-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container stop failed, see errors above."
}
Write-Host "Stopping ID..." -ForegroundColor Green
docker stop enterpriseweb-id-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container stop failed, see errors above."
}

Write-Host "Stopping CM..." -ForegroundColor Green
docker stop enterpriseweb-cm-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container stop failed, see errors above."
}

Write-Host "Stopping Rendering..." -ForegroundColor Green
docker stop enterpriseweb-rendering-aw-1 enterpriseweb-rendering-rba-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container stop failed, see errors above."
}
