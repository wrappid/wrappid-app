@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/native-web
CD %WRAPPID_HOME%\native-web\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\native-web\dist\) directory to (.\.wrappid\temp\web\node_modules\@wrappid\styled-components\)...
echo Copying files from (%WRAPPID_HOME%\native-web\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\web\node_modules\@wrappid\styled-components\)...
XCOPY /e /v %WRAPPID_HOME%\native-web\dist\ %PROJECT_DIR%\.wrappid\temp\web\node_modules\@wrappid\styled-components\