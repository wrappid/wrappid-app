#!/bin/bash

export PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

# build @wrappid/styles
cd %WRAPPID_HOME%\styles\
rmdir /S /Q dist
call npm run build

# Copying files from (%WRAPPID_HOME%\styles\dist\) directory to (.\.wrappid\temp\mobile\node_modules\@wrappid\styles\)...
echo Copying files from (%WRAPPID_HOME%\styles\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styles\)...
cp /e /v %WRAPPID_HOME%\styles\dist\ %PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styles\