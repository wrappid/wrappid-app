echo "Current working directory"
CD
echo "Deleting (.\temp\web) directory..."
RD /Q /S .\temp\web
echo "Creating (.\temp\web) directory..."
MKDIR .\temp\web
echo "Copying (.\template\web) directory to (.\temp\web)..."
XCOPY /e /v .\template\web\ .\temp\web\ /exclude:.wrappidignore
echo "Copying src directory to (.\temp\web\src)..."
XCOPY /e /v .\src\ .\temp\web\src\
echo "Changing directory (.\temp\web)..."
CD .\temp\web
echo "Current working directory"
CD
echo "Installing npm packages..."
@REM npm i
echo "Installing @wrappid/styles..."
echo "Installing @wrappid/sc-web with alias styled-components..."
echo "Installing @wrappid/core..."
npm i @wrappid/styles @wrappid/styled-components@npm:@wrappid/sc-web @wrappid/core
echo "Wrappid web app setup successful."
