# Wrappid App Template

**This is a template documentation, @wrappid/toolkit uses this template to create wrappid-app boilerplate.**


**Table of Contents**
- [Wrappid App Template](#wrappid-app-template)
  - [1. Introduction](#1-introduction)
  - [2. Getting Started](#2-getting-started)
    - [2.1. What are my Pre-requisites?](#21-what-are-my-pre-requisites)
    - [2.2. How to Create?](#22-how-to-create)
    - [2.3. How to Setup?](#23-how-to-setup)
    - [2.4. How to Start?](#24-how-to-start)
  - [3. What are Wrappid App Environments](#3-what-are-wrappid-app-environments)
    - [3.1 What are Wrappid App Runtime Environments?](#31-what-are-wrappid-app-runtime-environments)
  - [4. Where to Code?](#4-where-to-code)
  - [How to Build?](#how-to-build)
  - [5. What are Registries?](#5-what-are-registries)
    - [5.1. Application Registry](#51-application-registry)
    - [5.2. Components Registry](#52-components-registry)
    - [5.3. Functions Registry](#53-functions-registry)
    - [5.4. Menus Registry](#54-menus-registry)
    - [5.5. Reducers Registry](#55-reducers-registry)
    - [5.6. Resources Registry](#56-resources-registry)
    - [5.7 Routes Registry](#57-routes-registry)
    - [5.8 Validation Registry](#58-validation-registry)

## 1. Introduction   

This is a **frontend boilerplate template application** built using the `Wrappid` framework, which enables simultaneous development of web and mobile application.   
This guide will help us setup and run application using `Wrappid` framework.


## 2. Getting Started

This getting started section will help you setup a basic application built using the `Wrappid` framework. Follow the below steps to get going.

[2.1. What are my Pre-requisites?](#21-what-are-my-pre-requisites)
[2.2. How to Create?](#22-how-to-create)
[2.3. How to Setup?](#23-how-to-setup)
[2.4. How to Start?](#24-how-to-start)


### 2.1. What are my Pre-requisites?

- [Refer here](https://github.com/wrappid/#1-check-pre-requisites)
- Install [@wrappid/toolkit](https://github.com/wrappid/#2-install-wrappid-toolkit) globally


### 2.2. How to Create?

It is expected that you have successfully installed @wrappid/toolkit(wrappid framework's CLI tool) and initialised it.
Run the below command to create Frontend Wrappid Project

```terminal
wrappid init app <wrappid>
```

**Output:**  
![wrappid-app](https://github.com/wrappid/.github/assets/61864488/c7b6f0ae-bc7c-4008-87d0-96994839002a)


### 2.3. How to Setup?

Frontend `Wrappid-App` has two runtime-environments:
- Web
- Mobile

We will talk about these environments in upcomming sections.

> **_Note:_** _If you want to setup a wrappid-app project that is already in your github, you need to clone it. After clonning, run `npm i` at the root of the project_

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

### 2.4. How to Start?
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

## 3. What are Wrappid App Environments
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
### 3.1 What are Wrappid App Runtime Environments?

Frontend `Wrappid-App` has two runtime-environments:
- Web
- Mobile

## 4. Where to Code?   

./src/components

You'll write your code in components. 

Write your code in a function, then export default your function

For example, if name of your file is helloWrappider.js
It should have a function that is exported,
```js
export default function helloWrappider(){

}
```

Then put an import of your code's function in ComponentRegistry.js
```js
import helloWrappider from "./components/helloWrappider" 
export default function ComponentRegistry
{
HelloWrappiders: {comp: helloWrappider}
}
```

Now we need to see what we wrote in the browser.

Go to the RoutesRegistry,

create an route object in RoutesRegistrys
```js
{
  defaultAppRoute   :   {
      Page      :  {AppComponent: "HelloWrappiders" },
      entityRef :  'defaultAppRoute',
      URL       :  'defaultAppRoute'
    } 
}
```
Now run the below commad

```terminal
wrappid copy --src
```

Then run

```terminal
 wrappid start [web|mobile] --env=[dev|stage|prod]
```

Voila! Now after sometime(depending system specs) your browser will open and you'll be able to see your page rendered at localhost:3000

Now let's make another page,


Write your code in src/components directory

For example: secondPage.js


Then put an import of your code's function in ComponentRegistry.js
```js
import secondPage from "./components/secondPage"
```

Add another object for your new page, 

export default function ComponentRegistry
```js
{
HelloWrappiders: {comp: helloWrappider}, 
SecondPage: {comp: secondPage}
}
```

And again to see what we wrote in the browser, we will put another entry for our new component.

Go to the RoutesRegistry,

```js
{
defaultAppRoute:{
Page: {AppComponent: "HelloWrappiders", layout: "WrappidAppLayout" },
entityRef: 'defaultAppRoute',
URL:'defaultAppRoute'
}, 

secondPageRoute:{
Page: {AppComponent: "SecondPage", layout: "WrappidAppLayout" },
entityRef: 'uniqueSecondPage',
URL:'secondPage'
} 

}
```

Run below command in terminal

```terminal
wrappid copy [web|mobile] --src
```

You need to start again if you stopped your web sever. 


You should be able to see your page at localhost:3000/secondPage


## How to Build?

Before building it is recommended to do a fresh setup of your project

```terminal
```bash
wrappid setup [web|mobile] --env=[dev|stage|prod]
```

Run the below commands to build your wrappid app for web or mobile

```terminal
wrappid build [web|android|ios]
```

> **_Note:_** _For android builds, you need to create build.gradle file with a keystore file in res/android/app_
> IOS builds are not supported yet.


## 5. What are Registries?

### 5.1. Application Registry
The application registry is a registry where all the metadata of your wrappid-app are stored and managed.

### 5.2. Components Registry
The component registry is a registry where all the user-created components of your wrappid-app are stored and managed.

### 5.3. Functions Registry
The functions registry is a registry where all the user-created functions of your wrappid-app are stored and managed.

### 5.4. Menus Registry
The menus registry is a registry where all the user-created menus of your wrappid-app are stored and managed.

### 5.5. Reducers Registry
The reducers registry is a registry where all the user-created reducers of your wrappid-app are stored and managed.

### 5.6. Resources Registry
The resources registry is a registry where all the user-created resources of your wrappid-app are stored and managed.

### 5.7 Routes Registry
The routes registry is a registry where all the user-created routes of your wrappid-app are stored and managed.

### 5.8 Validation Registry
The validation registry is a registry where all the user-created validation functions of your wrappid-app are stored and managed.







