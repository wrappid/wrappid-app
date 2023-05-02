@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/native-mobile
CD %WRAPPID_HOME%\native-mobile\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\native-mobile\dist\) directory to (.\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\)...
echo Copying files from (%WRAPPID_HOME%\native-mobile\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\)...
XCOPY /e /v %WRAPPID_HOME%\native-mobile\dist\ %PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\