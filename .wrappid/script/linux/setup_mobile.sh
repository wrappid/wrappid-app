#!/bin/bash
# clearing the screen before starting
clear
echo $PWD
# printing the wrappid logo
cat ./.wrappid/wrappid_logo.txt
# pause
echo Starting Wrappid Application setup for web
# timeout 3

echo
echo Current working directory is $PWD

echo
echo "Deleting (./.wrappid/temp/mobile) directory..."
rm -r /Q /S ./.wrappid/temp/mobile
echo Creating "(./.wrappid/temp/mobile) directory..."
mkdir -p ./.wrappid/temp/mobile

echo
echo "Copying files from (./.wrappid/template/mobile) directory to (./.wrappid/temp/mobile)..."
#cp -r /e /v ./.wrappid/template/mobile/ ./.wrappid/temp/mobile/ /exclude:./.wrappid/.wrappidignore
rsync -av --exclude-from='.wrappid/.wrappidignore' .wrappid/template/mobile/ .wrappid/temp/mobile/

echo
echo "Copying resources files from (./resources/android/res) directory to (./.wrappid/temp/mobile/android/app/src/main/res)..."
cp -rR /e /v ./resources/android/res ./.wrappid/temp/mobile/android/app/src/main/

echo
echo $PWD
echo Copying files from "(./src) directory to (./.wrappid/temp/mobile/src)..."
cp -r /e /v ./src ./.wrappid/temp/mobile/

# IOS RESOURCES COPY MISSING

echo
echo "Changing directory (./.wrappid/temp/mobile)..."
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