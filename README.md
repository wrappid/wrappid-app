# `Wrappid` App Boilerplate

```text
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|
```

This is a **frontend boilerplate application** built using the `Wrappid` framework, which enables simultaneous development of web and mobile application.

## Introduction

This guide will help us setup and run application using `Wrappid` framework. This is a boilerplate application using `Wrappid` framework to be used for both web and mobile application.

## Getting Started

This getting started section will help you setup a basic application built using the `Wrappid` framework. Follow the below steps to get going.

1. Verify Pre-requisites
2. Setup `Wrappid` Project
3. Run `Wrappid` Project

### Verify Pre-requisites

First you need to verify that your system fulfills the pre-requisites. Listed below are the things required to be available in your system.

- Node.js - version 16
- npm - version 8

#### For Mobile development

- JDK 11 or more
- Android Studio
  - Android Device Manager
  - At least one device on the emulator

### Setup `Wrappid` Project

#### Setup development environment

Run the below command to install all the npm module(s). This will install the dev dependencies.

```javascript
npm i
```

#### Setup `Wrappid` Application

- Web

```javascript
npm run setup:web
```

- Mobile

```javascript
npm run setup:mobile
```

### Run `Wrappid` Application

- Web

```javascript
npm run start:web
```

This should launch your default browser with a URL `http://localhost:3000`

- Mobile

```javascript
npm run start:mobile
```

This should launch your emulated device (provided a proper setup is done on the Android Device Manager)
