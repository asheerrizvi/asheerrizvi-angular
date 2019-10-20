# asheerrizvi.com

This is a single page application built using [Bulma.io](https://bulma.io) on top of [Angular](https://angular.io). It uses a [Firebase Function](https://firebase.google.com/docs/functions) and is also deployed on [Firebase](https://firebase.com).

## Getting Started

If you want to check it out on your local machine follow the instructions below, deployment instructions follow towards the end. 

### Prerequisites

For getting started you need Angular and Firebase Tools, to install Angular you can follow the instructions [here](https://angular.io/guide/setup-local). Firebase tools can be installing using the npm package, instructions for which can be found [here](https://firebase.google.com/docs/cli).

### Installation

Clone the repository on your local machine and execute the following from the root directory of the project
```console
asheerrizvi-angular:~$ npm install
```
I have intentionally left the Firebase functions sub folder along with the config files for reference. I recommend you to copy them in a separate location then delete the folder (functions) and files (.firebaserc and firebase.json) and start from scratch using the deployment section below. 

## Running Locally

Run the application on localhost using
```
ng serve --o
```

## Deployment

I have used Firebase for hosting this app, you can use any other hosting service if required. A Firebase function is also used in this app to send mails from the Angular front end without needing an explicit server implementation such as NodeJS.

### Setting up Firebase
Go to [Firebase](https://firebase.google.com/) and create a free account, you can then setup Firebase for deploying an Angular App by referring to this [this article](https://angularfirebase.com/lessons/deploying-an-angular-app-to-firebase/). Basically you have to do the following steps:
```
ng build --prod
firebase login
firebase init
firebase deploy
```
If successful you will be able to see your deployed app using the URL displayed in the CLI. 

### Setting up Firebase Functions (optional)
I have used a Firebase function as I wanted the ability to send emails without neednig a full fledged backend application (NodeJS in my case). I found [this article](https://medium.com/@edigleyssonsilva/cloud-functions-for-firebase-sending-e-mail-1f2631d1022e) to be very helpful and I would recommend you to follow the same approach. For reference you can checkout my implementation (functions/index.js) which I have left behind in the app. 
