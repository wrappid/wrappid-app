# We've made few changes

## So start contributing to wrappid again please follow the below steps

- Step 1
Please change name of sc-web and sc-mobile folder to native-web and native-mobile
in your wrappid repositories directory.

- Step 2
  - Change the following in ./native-web/.git/config file

  ```text
  [remote "origin"]
    url = https://github.com/wrappid/native-web.git
  ```

  - Change the following in ./native-mobile/.git/config file
  
  ```text
  [remote "origin"]
    url = https://github.com/wrappid/native-mobile.git
  ```

- Step 3
  Pull all the wrappid repositories.

  ```bat
  CD %WRAPPID_HOME%
  CD ./styles/
  git pull
  CD ../native-web/
  git pull
  CD ../native-mobile/
  git pull
  CD ../core/
  git pull
  CD ../wrappid-app/
  git pull
  ```
