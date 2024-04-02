Write-Host "Starting Solr and SQL Server..." -ForegroundColor Green
docker start enterpriseweb-solr-1 enterpriseweb-mssql-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container start failed, see errors above."
}

Write-Host "Starting ID..." -ForegroundColor Green
docker start enterpriseweb-id-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container start failed, see errors above."
}

Write-Host "Starting CM..." -ForegroundColor Green
docker start enterpriseweb-cm-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container start failed, see errors above."
}

Write-Host "Starting Rendering..." -ForegroundColor Green
docker start enterpriseweb-rendering-aw-1 enterpriseweb-rendering-rba-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container start failed, see errors above."
}

Write-Host "Starting Traefik..." -ForegroundColor Green
docker start enterpriseweb-traefik-1
if ($LASTEXITCODE -ne 0) {
    Write-Error "Container start failed, see errors above."
}
