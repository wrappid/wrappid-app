# `Wrappid` App Boilerplate

```text
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|
```

## 1. Introduction   

This is a **frontend boilerplate template application** built using the `Wrappid` framework, which enables simultaneous development of web and mobile application.   
This guide will help us setup and run application using `Wrappid` framework.


## 2. Getting Started

This getting started section will help you setup a basic application built using the `Wrappid` framework. Follow the below steps to get going.

2.1. [Verify Pre-requisites]()   
2.2. [Initialize a frontend `wrappid-app`]()   
2.3. [Setup `wrappid-app` application-development environment]()   
2.4. [Run `wrappid-app` Project]()   

<!-- ### Verify Pre-requisites

First you need to verify that your system fulfills the pre-requisites. Listed below are the things required to be available in your system.

- Node.js - version 16
- npm - version 8
- @wrappid/toolkit installed globally

#### STEPS TO FOLLOW

- Step 1: wrappid init app test-project
- Step 2: cd test-project-app
- Step 3: wrappid setup
- Step 4: wrappid start web
- Step 5: wrappid start mobile

#### For Mobile development

- JDK 11 or more
- Android Studio
  - Android Device Manager
  - At least one device on the emulator -->

### 2.1. Verify Pre-requisites

 - npm package @wrappid/toolkit
[Click here for @wrappid/toolkit installation guide ]()


### 2.2. Initialize a frontend `wrappid-app` project

It is expected that you have successfully installed @wrappid/toolkit(wrappid framework's CLI tool) and initialised it.
Run the below command to create Frontend Wrappid Project

```terminal
wrappid init app <wrappid>
```

**Output:**  
![wrappid-app](https://github.com/wrappid/.github/assets/61864488/c7b6f0ae-bc7c-4008-87d0-96994839002a)


### 2.3. Setup wrappid-app application development environment

Frontend `Wrappid-App` has two runtime-environments:
- Web
- Mobile

We will talk about these environments in upcomming sections.

Run the below command to setup a Frontend Wrappid Project in web and mobile runtime-environments.

```bash
cd <wrappid>-<app>
wrappid setup
```

Run the below command to setup a `wrappid-app` in web runtime-environment.

```bash
cd <wrappid>-<app>
wrappid setup web
```

Run the below command to setup a `wrappid-app` in mobile runtime-environment.

```bash
cd <wrappid>-<app>
wrappid setup mobile
```

### 2.4. Start a Wrappid Frontend project
You can start a frontend app in two modes:
- [Static (Without Backend Service)]()   
- [Dynamic (With Backend Service)]()

- **Static (Without Backend Service)**
Run the below command to start the development frontend server for web:
```bash
cd wrappid-app
wrappid start web
```

This should launch your default browser with a URL `http://localhost:3000`

Run the below command to start the development server for mobile:

```bash
cd wrappid-app
wrappid start mobile
```

This should launch your emulated device (provided a proper setup is done on the Android Device Manager)


- **Dynamic (With Backend Service)**

To start Dynamic Fontend Wrappid project, you'll first need your Wrappid Backend up and running. [steps for backend]().   
 - Enter you Backend URL in `wrappid.conf.json` file located at the root of `wrappid-app` project.   
 - Follow the same steps for starting a [static frontend wrappid-app]()   

## 3. Wrappid App Environments
Wrappid App can be runned in 3 environments:
- Dev: Suitable for Development
- Stage: Suitable for Testing
- Prod: Suitable for Production

By default, Wrappid App project setups and starts in `dev` environment.
These environments are to be configured in wrappid.conf.json located at the root of `wrappid-app` project

To run a Wrappid App project in a different environment, run the below command:
```terminal
cd wrappid-app
wrappid start [web|mobile] --env=[dev|stage|prod]
```

## 3. Wrappid packages

There are 4 wrappid packages that are used by `wrappid-app`.
 3.1. @wrappid/core   
 3.2. @wrappid/styles   
 3.3. @wrappid/native-web   
 3.4. @wrappid/native-mobile   

### 3.1. Wrappid Core Package

### 3.2. Wrappid Styles Package

### 3.3. Wrappid Native-Web Package

### 3.4. Wrappid Native-Mobile Package






