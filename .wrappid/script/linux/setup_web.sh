#!/bin/bash

# clearing the screen before starting
clear

# printing the wrappid logo
cat ./.wrappid/wrappid_logo.txt
# pause

echo "Starting Wrappid Application setup for web"
# timeout 3


echo "Current working directory is"
pwd


echo "Deleting (./.wrappid/temp/web) directory..."
rmdir ./.wrappid/temp/web
echo "Creating (./.wrappid/temp/web) directory..."
mkdir ./.wrappid/temp/web


echo  "Copying files from (./.wrappid/template/web/) directory to (./.wrappid/temp/web/)..."
rsync -av --progress --exclude=./.wrappid/.wrappidignore ./.wrappid/template/web/  ./.wrappid/temp/web/



echo "Copying resources files from (./resources/web/public/) directory to (./.wrappid/temp/web/public/)..."
cp  ./resources/web/public/ ./.wrappid/temp/web/public/


echo "Copying files from (./src/ ) directory to (./.wrappid/temp/web/src/)..."
cp  ./src/ ./.wrappid/temp/web/src/

echo "Changing directory to (./.wrappid/temp/web)..."
cd ./.wrappid/temp/web
echo "Current working directory is"
pwd

echo "Installing npm packages..."
echo "Installing @wrappid/styles..."
echo "Installing @wrappid/native-web with alias styled-components..."
echo "Installing @wrappid/core..."
npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/native-web @wrappid/core

echo "Wrappid web app setup successful."