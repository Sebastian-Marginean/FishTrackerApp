@echo off
setlocal

cd /d "%~dp0"

set "NODEJS_DIR=C:\Program Files\nodejs"
if exist "%NODEJS_DIR%\npm.cmd" goto run

set "NODEJS_DIR=%LocalAppData%\Programs\nodejs"
if exist "%NODEJS_DIR%\npm.cmd" goto run

echo Node.js was not found in the standard Windows locations.
echo Install Node.js or add npm.cmd to PATH, then try again.
exit /b 1

:run
set "PATH=%NODEJS_DIR%;%PATH%"
call "%NODEJS_DIR%\npm.cmd" ci
