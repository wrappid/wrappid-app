@ECHO OFF
CLS

set "NODE_ENV=dev"
ECHO Please choose your environment:
ECHO dev
ECHO stage
ECHO prod
set /p "NODE_ENV="

echo Choosen environment is %NODE_ENV%.

@REM COPY ENV SPECIFIC CONFIG FROM WRAPPIDCONFIG.JSON TO CONFIG.JSON

@REM jump to :CASE_prod, :CASE_stage, :CASE_dev etc.
2>NUL CALL :CASE_%NODE_ENV% 
IF ERRORLEVEL 1 CALL :DEFAULT_CASE

ECHO Done.
EXIT /B

:CASE_stage
    Powershell -C "((Get-Content .\wrappidconfig.json | ConvertFrom-Json).stage | ConvertTo-Json -Compress)" > config.json
    GOTO END_CASE
:CASE_prod
    Powershell -C "((Get-Content .\wrappidconfig.json | ConvertFrom-Json).production | ConvertTo-Json -Compress)" > config.json
    GOTO END_CASE
:CASE_dev
:DEFAULT_CASE
    Powershell -C "((Get-Content .\wrappidconfig.json | ConvertFrom-Json).development | ConvertTo-Json -Compress)" > config.json
    GOTO END_CASE
:END_CASE
    ECHO process end
    VER > NUL # reset ERRORLEVEL
    MOVE /Y .\config.json .\.wrappid\temp\mobile
    ECHO Wrappid is running in %NODE_ENV% environment...
    CALL npm start  --prefix .wrappid\\temp\\mobile