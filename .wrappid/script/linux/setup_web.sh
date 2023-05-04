#!/bin/bash

# clearing the screen before starting
clear

# printing the wrappid logo
cat .\.wrappid\wrappid_logo.txt
# pause

echo Starting Wrappid Application setup for web
# timeout 3

echo.
echo Current working directory is
cd

echo.
echo Deleting (.\.wrappid\temp\web) directory...
rmdir /Q /S .\.wrappid\temp\web
echo Creating (.\.wrappid\temp\web) directory...
mkdir .\.wrappid\temp\web

echo.
echo Copying files from (.\.wrappid\template\web) directory to (.\.wrappid\temp\web)...
cp /e /v .\.wrappid\template\web\ .\.wrappid\temp\web\ /exclude:.\.wrappid\.wrappidignore

echo.
echo Copying resources files from (.\resources\web\public) directory to (.\.wrappid\temp\web\public)...
cp /e /v .\resources\web\public\ .\.wrappid\temp\web\public\

echo.
echo Copying files from (.\src) directory to (.\.wrappid\temp\web\src)...
cp /e /v .\src\ .\.wrappid\temp\web\src\

echo.
echo Changing directory to (.\.wrappid\temp\web)...
cd .\.wrappid\temp\web
echo Current working directory is
cd

echo.
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/native-web with alias styled-components...
echo Installing @wrappid/core...
call npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/native-web @wrappid/core

echo.
echo Wrappid web app setup successful.
echo.