# Weather Journal App
	
The weather jounrnal app is an asynchronous web app that uses openweathermap API and user given data to get the current temprature of 
the given ZIP codeand dynamically update the UI of the weather journal app.
 
## Demo-Preview
![Page-Demo](https://imgur.com/F5mxrOZ)

## Table of Contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Resources](#resources)

## Installation
[(Back to top)](#table-of-contents)

Use the following command to run the server 'node server.js' and locate the following port 'localhost:3000'.

## Usage
[(Back to top)](#table-of-contents)

The weather app is used to provide the user with the current temperature to the given zip code (of USA).

## Development
[(Back to top)](#table-of-contents)

There are server-side implementation and client-side implementation, I will explain each of them briefly.

Server-side:
Some variables are made to hold data such as projectData which contain objects of {temp, content, date}, another varibale holds the port
which is being used to run the server, 3 other variables made to require express, body-parser, cors. A GET route is created to send back
projectData, another POST route is created to save the given data from the user.

Client-side:
When the user enters the needed data and click on 'Generate' button, the callback function 'handleBtn' is triggered, if the user didn't provide
the needed values, an alert is popped to notify him, then the given values from the user is saved and 4 functions are called as following:
-getData function is an async function that's used to fetch data from openweathermap API and returns the temp of the given ZIP.
-getProjectData function is an async function that's used to POST user data at '/saveWeather' route.
-getProjectData function is an async function used to return projectData (saved user data).
-updateUI function is used to update the UI of the weather app with user's data. 


## Resources
[(Back to top)](#table-of-contents)
