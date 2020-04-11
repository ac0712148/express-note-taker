# Note Taker with Express JS

## Table of Contents
  
  * [Description](#description)
  * [Files](#files)
  * [Installation and Dependencies](#installation)
  * [Usage](#usage)

## Description

For this project, we design and build a Note Taker web application that allows the user to create notes and save 
them to a json file using Express request calls. The request calls used for this project are GET, POST, and DELETE. 
Routing is used to navigate to links and API content of the notes.

## Files

The files included for this project are as follow:
  * `server.js` - main server script file that handles server side communications
  * `/routes/apiRoutes.js` - routing handler script for API routes
  * `/routes/htmlRoutes.js` - routing handler script for HTML routes
  * `/public/index.html` - html file to display starting page
  * `/public/notes.html` - html file to display notes website
  * `/public/assets/js/index.js` - script file to handle btn events and web side communication to server
  * `/public/assets/css/styles.css` - styling for website
  * `/db/db.json` - json file to save note entries
  * `package.json` - dependecies for project

## Installation and Dependencies

To run this script, we must install the dependencies for this project. The main dependency is `express` in order to run client-server communication. Run `npm install express`

## Usage

The purpose of using project is to create notes and demonstrate the use of Express JS to establish client-server 
communication and use reading/writing file capabilities to update saved data