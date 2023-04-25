@echo off

@REM clearing the screen before starting
cls

@REM printing the wrappid logo
type .\.wrappid\wrappid_logo.txt
@REM pause

echo Starting Wrappid Application setup for web
@REM timeout 3

echo.
echo Current working directory is
CD

echo.
echo Deleting (.\.wrappid\temp\web) directory...
RD /Q /S .\.wrappid\temp\web
echo Creating (.\.wrappid\temp\web) directory...
MKDIR .\.wrappid\temp\web

echo.
echo Copying files from (.\.wrappid\template\web) directory to (.\.wrappid\temp\web)...
XCOPY /e /v .\.wrappid\template\web\ .\.wrappid\temp\web\ /exclude:.\.wrappid\.wrappidignore

echo.
echo Copying files from (.\src) directory to (.\.wrappid\temp\web\src)...
XCOPY /e /v .\src\ .\.wrappid\temp\web\src\

echo.
echo Changing directory to (.\.wrappid\temp\web)...
CD .\.wrappid\temp\web
echo Current working directory is
CD

echo.
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/sc-web with alias styled-components...
echo Installing @wrappid/core...
call npm i @wrappid/styles@0.0.3 @wrappid/styled-components@npm:@wrappid/sc-web@0.0.5 @wrappid/core@0.0.11

echo.
echo Wrappid web app setup successful.
echo.