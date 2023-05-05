#!/bin/bash
export PROJECT_DIR=$PWD
echo Current working directory is
pwd
#echo $PROJECT_DIR

# build @wrappid/core
cd $WRAPPID_HOME/core/
echo Current working directory is $PWD
rm -rf dist
npm run build

# Copying files from ($WRAPPID_HOME/core/dist/) directory to (./.wrappid/temp/web/node_modules/@wrappid/core/)...
echo "Copying files from ($WRAPPID_HOME/core/dist/) directory to ($PROJECT_DIR/.wrappid/temp/web/node_modules/@wrappid/core/)..."
cp -r $WRAPPID_HOME/core/dist/ $PROJECT_DIR/.wrappid/temp/web/node_modules/@wrappid/core/
