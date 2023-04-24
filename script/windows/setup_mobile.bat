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
echo Deleting (.\temp\mobile) directory...
RD /Q /S .\temp\mobile
echo Creating (.\temp\mobile) directory...
MKDIR .\temp\mobile

echo.
echo Copying files from (.\template\mobile) directory to (.\temp\mobile)...
XCOPY /e /v .\template\mobile\ .\temp\mobile\ /exclude:.wrappidignore

echo.
echo Copying files from (.\src) directory to (.\temp\mobile\src)...
XCOPY /e /v .\src\ .\temp\mobile\src\

echo.
echo Changing directory (.\temp\mobile)...
CD .\temp\mobile
echo Current working directory is
CD

echo.
echo Installing npm packages...
echo Installing @wrappid/styles...
echo Installing @wrappid/sc-mobile with alias styled-components...
echo Installing @wrappid/core...
call npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/sc-mobile @wrappid/core

echo.
echo Wrappid mobile app setup successful.
echo.