@echo off

@REM clearing the screen before starting
cls

@REM printing the wrappid logo
@REM type .\wrappid_logo.txt
@REM pause

@REM printing the donkey way as the above code is not working
@REM echo                                 _     _ 
echo __      ___ __ __ _ _ __  _ __ (_) __^| ^|
echo \ \ /\ / / '__/ _` ^| '_ \^| '_ \^| ^|/ _` ^|
echo  \ V  V /^| ^| ^| (_^| ^| ^|_) ^| ^|_) ^| ^| (_^| ^|
echo   \_/\_/ ^|_^|  \__,_^| .__/^| .__/^|_^|\__,_^|
echo                    ^|_^|   ^|_^|            
echo.

echo Starting Wrappid Application setup for web
@REM timeout 3

echo.
echo Current working directory is
CD

echo.
echo Deleting (.\temp\web) directory...
RD /Q /S .\temp\web
echo Creating (.\temp\web) directory...
MKDIR .\temp\web

echo.
echo Copying files from (.\template\web) directory to (.\temp\web)...
XCOPY /e /v .\template\web\ .\temp\web\ /exclude:.wrappidignore

echo.
echo Copying files from (.\src) directory to (.\temp\web\src)...
XCOPY /e /v .\src\ .\temp\web\src\

echo.
echo Changing directory to (.\temp\web)...
CD .\temp\web
echo Current working directory is
CD

echo.
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/sc-web with alias styled-components...
echo Installing @wrappid/core...
call npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/sc-web @wrappid/core

echo.
echo Wrappid web app setup successful.
echo.