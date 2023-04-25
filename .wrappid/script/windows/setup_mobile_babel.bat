@echo off

@REM clearing the screen before starting
cls

@REM printing the wrappid logo
@REM type .\.wrappid\wrappid_logo.txt
@REM pause
echo Starting Wrappid Application setup for web
@REM timeout 3

echo.
echo Current working directory is
CD

echo.
echo Deleting (.\.wrappid\temp\mobile) directory...
RD /Q /S .\.wrappid\temp\mobile
echo Creating (.\.wrappid\temp\mobile) directory...
MKDIR .\.wrappid\temp\mobile

echo.
echo Copying files from (.\.wrappid\template\mobile) directory to (.\.wrappid\temp\mobile)...
XCOPY /e /v .\.wrappid\template\mobile\ .\.wrappid\temp\mobile\ /exclude:.\.wrappid\.wrappidignore

echo.
echo Copying files from (.\src) directory to (.\.wrappid\temp\mobile\src)...
XCOPY /e /v .\src\ .\.wrappid\temp\mobile\src\

echo.
echo Changing directory (.\.wrappid\temp\mobile)...
CD .\.wrappid\temp\mobile
echo Current working directory is
CD

echo.
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/sc-mobile with alias styled-components...
echo Installing @wrappid/core...
call npm i @wrappid/styles@0.0.5-alpha.0 @wrappid/styled-components@npm:@wrappid/sc-mobile@0.0.4-alpha.0 @wrappid/core@0.0.13-alpha.0

echo.
echo Wrappid mobile app setup successful.
echo.