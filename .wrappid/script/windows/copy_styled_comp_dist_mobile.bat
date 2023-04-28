@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/sc_web
CD %WRAPPID_HOME%\sc_web\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\sc_web\dist\) directory to (.\.wrappid\temp\mobile\node_modules\@wrappid\styled_components\)...
echo Copying files from (%WRAPPID_HOME%\sc_web\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled_components\)...
XCOPY /e /v %WRAPPID_HOME%\sc_web\dist\ %PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\styled_components\