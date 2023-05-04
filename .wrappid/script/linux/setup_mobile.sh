#!/bin/bash
# clearing the screen before starting
clear

# printing the wrappid logo
cat ./.wrappid/wrappid_logo.txt
# pause
echo Starting Wrappid Application setup for web
# timeout 3

echo
echo Current working directory is
cd

echo
echo Deleting (./.wrappid/temp/mobile) directory...
rmdir /Q /S ./.wrappid/temp/mobile
echo Creating (./.wrappid/temp/mobile) directory...
mkdir ./.wrappid/temp/mobile

echo
echo Copying files from (./.wrappid/template/mobile) directory to (./.wrappid/temp/mobile)...
cp /e /v ./.wrappid/template/mobile/ ./.wrappid/temp/mobile/ /exclude:./.wrappid/.wrappidignore

echo
echo Copying resources files from (./resources/android/res) directory to (./.wrappid/temp/mobile/android/app/src/main/res)...
cp /e /v ./resources/android/res/ ./.wrappid/temp/mobile/android/app/src/main/res/

echo
echo Copying files from (./src) directory to (./.wrappid/temp/mobile/src)...
cp /e /v ./src/ ./.wrappid/temp/mobile/src/

# IOS RESOURCES COPY MISSING

echo
echo Changing directory (./.wrappid/temp/mobile)...
cd ./.wrappid/temp/mobile
echo Current working directory is
cd

echo
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/native-mobile with alias styled-components...
echo Installing @wrappid/core...
npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/native-mobile @wrappid/core

echo
echo Wrappid mobile app setup successful.
echo