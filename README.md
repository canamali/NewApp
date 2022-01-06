# Mobile Project Frontend Repo

## Background
At the moment, Mobile Project maintains a front-end web application (written with React.js) coupled with a server-side application (written with Django). The web ecosystem has evolved dramatically over the last decade, playing host to an ever-changing range of frameworks.
Expo is one of these powerful frameworks that enables the development of universal applications. Key features include:

* Usage of React Native
* Support for TypeScript
* Support for Android, iOS, and web
* Additionally, there are other benefits that Expo provides over native solutions, some of which are addressed in this document.

## Getting started 
This section explains how to get started with the repository 

### `Cloning`

```sh
$ git clone https://github.com/canamali/NewApp.git
```

This clones or downloads the repository onto your computer.

### Installing Global Packages

```sh
$ npm install -g expo-cli
```


Note that there may be other global packages that i may have forgotten to add. 
### Run the application


```sh
$ cd modules/client
```
This would navigate you to the folder that contains the code

```sh
$ yarn
```

This part installs the dependencies that would be needed to run the project. 

```sh
$ yarn ios
```
or 
```sh
$ yarn android
```
Note, `yarn android` may require you to change the android sdk path in android/local.properties file.
or 
```sh
$ yarn web
```

This command runs the project!

Enjoy !
