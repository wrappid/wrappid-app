#!/bin/bash
export PROJECT_DIR=$PWD
echo Current working directory is
echo $PROJECT_DIR

# build @wrappid/native-mobile
cd $WRAPPID_HOME/native-mobile/
rm -rf dist
call npm run build

# Copying files from ($WRAPPID_HOME/native-mobile/dist/) directory to (./.wrappid/temp/mobile/node_modules/@wrappid/styled-components/)...
echo "Copying files from ($WRAPPID_HOME/native-mobile/dist/) directory to ($PROJECT_DIR/.wrappid/temp/mobile/node_modules/@wrappid/styled-components/)..."
cp -r $WRAPPID_HOME/native-mobile/dist/ $PROJECT_DIR/.wrappid/temp/mobile/node_modules/@wrappid/styled-components/
