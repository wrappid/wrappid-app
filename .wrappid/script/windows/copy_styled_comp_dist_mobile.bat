@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/sc-mobile
CD %WRAPPID_HOME%\sc-mobile\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\sc-mobile\dist\) directory to (.\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\)...
echo Copying files from (%WRAPPID_HOME%\sc-mobile\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\)...
XCOPY /e /v %WRAPPID_HOME%\sc-mobile\dist\ %PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled-components\