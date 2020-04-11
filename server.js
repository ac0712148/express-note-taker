const express = require("express");
const path = require("path");

// import function for setting up routing
const addApiRoutes = require("./routes/apiRoutes");
const addHtmlRoutes = require("./routes/htmlRoutes");

// Initialization of express server app
const app = express();
// Port variable to to be used in local machine or use 
//  environment port
const PORT = process.env.PORT || 3000;

// Setting up the Express app to handle data parsing
// (aka sets up req.body)
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public"), { extensions: ["html","js","css"] }));

//These functions points the server to a series of routing files
addApiRoutes(app);
addHtmlRoutes(app);

// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
});