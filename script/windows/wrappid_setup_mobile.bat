echo "Current working directory"
CD
echo "Deleting (.\temp\mobile) directory..."
RD /Q /S .\temp\mobile
echo "Creating (.\temp\mobile) directory..."
MKDIR .\temp\mobile
echo "Copying (.\template\mobile) directory to (.\temp\mobile)..."
XCOPY /e /v .\template\mobile\ .\temp\mobile\ /exclude:.wrappidignore
echo "Copying src directory to (.\temp\mobile\src)..."
XCOPY /e /v .\src\ .\temp\mobile\src\
echo "Changing directory (.\temp\mobile)..."
CD .\temp\mobile
echo "Current working directory"
CD
echo "Installing npm packages..."
npm i
echo "Wrappid mobile app setup successful."
