#!/bin/bash
export PROJECT_DIR=$PWD
echo Current working directory is
echo $PROJECT_DIR

# build @wrappid/core
cd $WRAPPID_HOME/core/
rm -rf dist
call npm run build

# Copying files from ($WRAPPID_HOME/core/dist/) directory to (./.wrappid/temp/mobile/node_modules/@wrappid/core/)...
echo "Copying files from ($WRAPPID_HOME/core/dist/) directory to ($PROJECT_DIR/.wrappid/temp/mobile/node_modules/@wrappid/core/)..."
cp -r $WRAPPID_HOME/core/dist/ $PROJECT_DIR/.wrappid/temp/mobile/node_modules/@wrappid/core/
