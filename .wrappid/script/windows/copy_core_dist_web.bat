@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/core
CD %WRAPPID_HOME%\core\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\core\dist\) directory to (.\.wrappid\temp\mobile\node_modules\@wrappid\core\)...
echo Copying files from (%WRAPPID_HOME%\core\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\core\)...
XCOPY /e /v %WRAPPID_HOME%\core\dist\ %PROJECT_DIR%\.wrappid\temp\mobile\node_modules\@wrappid\core\