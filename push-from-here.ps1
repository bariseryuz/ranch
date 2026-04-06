# Pushes to https://github.com/bariseryuz/ranch — run ONLY in ranch-website (not Desktop\Ranch).
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
git add -A
if (-not (git status --short)) {
  Write-Host "Nothing to commit. Save files under ranch-website\ and try again." -ForegroundColor Yellow
  exit 0
}
$msg = if ($args[0]) { $args[0] } else { "Update" }
git commit -m $msg
git push origin main
Write-Host "Pushed to origin/main." -ForegroundColor Green
