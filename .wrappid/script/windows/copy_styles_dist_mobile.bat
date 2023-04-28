@echo off

set PROJECT_DIR=%CD%
echo Current working directory is
echo %PROJECT_DIR%

@REM build @wrappid/styles
CD %WRAPPID_HOME%\styles\
RD /S /Q dist
call npm run build

@REM Copying files from (%WRAPPID_HOME%\styles\dist\) directory to (.\.wrappid\temp\web\node_modules\@wrappid\styles\)...
echo Copying files from (%WRAPPID_HOME%\styles\dist\) directory to (%PROJECT_DIR%\.wrappid\temp\web\node_modules\@wrappid\styles\)...
XCOPY /e /v %WRAPPID_HOME%\styles\dist\ %PROJECT_DIR%\.wrappid\temp\web\node_modules\@wrappid\styles\