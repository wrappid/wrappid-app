#!/bin/bash
export PROJECT_DIR=%CD%
echo Current working directory is
pwd
#echo %PROJECT_DIR%

# build @wrappid/core
cd %WRAPPID_HOME%/core/
rmdir /S /Q dist
npm run build

# Copying files from (%WRAPPID_HOME%/core/dist/) directory to (./.wrappid/temp/web/node_modules/@wrappid/core/)...
echo "Copying files from (%WRAPPID_HOME%/core/dist/) directory to (%PROJECT_DIR%/.wrappid/temp/web/node_modules/@wrappid/core/)..."
cp  %WRAPPID_HOME%/core/dist/ %PROJECT_DIR%/.wrappid/temp/web/node_modules/@wrappid/core/