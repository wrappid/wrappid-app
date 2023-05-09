#!/bin/bash
@ECHO OFF
clear

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
    Powershell -C "(Get-Content .\wrappidconfig.json | ConvertFrom-Json).stage" > .env
    GOTO END_CASE
:CASE_prod
    Powershell -C "(Get-Content .\wrappidconfig.json | ConvertFrom-Json).production" > .env
    GOTO END_CASE
:CASE_dev
:DEFAULT_CASE
    Powershell -C "(Get-Content .\wrappidconfig.json | ConvertFrom-Json).development" > .env
    GOTO END_CASE
:END_CASE
    ECHO process end
    VER > NUL # reset ERRORLEVEL
    
    set "fileContent=.env"

    for /f "delims=" %%i in ('type "%fileContent%" ^& break ^> "%fileContent%" ') do (
        set "line=%%i"
        setlocal enabledelayedexpansion
        >>"%fileContent%" echo(!line:%search%=%replace%!
        endlocal
    )
    
    @REM @REM trim and remove spaces
    @REM set "search= "
    @REM set "replace="
    @REM for /f "delims=" %%i in ('type "%fileContent%" ^& break ^> "%fileContent%" ') do (
    @REM     set "line=%%i"
    @REM     setlocal enabledelayedexpansion
    @REM     >>"%fileContent%" echo(!line:%search%=%replace%!
    @REM     endlocal
    @REM )

    MOVE /Y .\.env .\.wrappid\temp\web
    ECHO Wrappid is running in %NODE_ENV% environment...
    @REM CALL npm start  --prefix .wrappid\\temp\\web