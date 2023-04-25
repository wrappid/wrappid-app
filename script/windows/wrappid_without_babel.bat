@REM DIR ..\core\package\
DIR %WRAPPID_HOME%\styles\package\
echo "Remove existing wrappid packages with babel build in node_modules folder..."
RD /S /Q .\temp\web\node_modules\@wrappid\styles
RD /S /Q .\temp\web\node_modules\@wrappid\styled-components
RD /S /Q .\temp\web\node_modules\@wrappid\core

XCOPY /e /v %WRAPPID_HOME%\styles\package\ .\temp\web\node_modules\@wrappid\styles\
XCOPY /e /v %WRAPPID_HOME%\sc-web\package\ .\temp\web\node_modules\@wrappid\styled-components\
XCOPY /e /v %WRAPPID_HOME%\core\package\ .\temp\web\node_modules\@wrappid\core\
