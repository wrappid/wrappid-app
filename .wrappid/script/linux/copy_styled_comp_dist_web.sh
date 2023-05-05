#!/bin/bash
export PROJECT_DIR=$PWD
echo Current working directory is
echo $PROJECT_DIR

# build @wrappid/native-web
cd $WRAPPID_HOME/native-web/
rm -rf dist
call npm run build

# Copying files from ($WRAPPID_HOME/native-web/dist/) directory to (./.wrappid/temp/web/node_modules/@wrappid/styled-components/)...
echo "Copying files from ($WRAPPID_HOME/native-web/dist/) directory to ($PROJECT_DIR/.wrappid/temp/web/node_modules/@wrappid/styled-components/)..."
cp -r $WRAPPID_HOME/native-web/dist/ $PROJECT_DIR/.wrappid/temp/web/node_modules/@wrappid/styled-components/
