// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes
projectData = {};
const port = 3000;
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 */

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static(__dirname + "/website"));

// Spin up the server
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Initialize all route with a callback function

// GET Route
app.get("/getWeather", (req, res) => {
  res.send(projectData);
});

// POST Route
app.post("/saveWeather", (req, res) => {
  // projectData.temp = req.body.temp;
  // projectData.content = req.body.content;
  // projectData.date = req.body.date;
  projectData = { ...req.body };
  res.end();
});
