// We are linking our routes to our data source
const dbData = require("../db/db");

// We are using fs module to retrive and store notes
const fs = require("fs");

module.exports = (app) => {
    // API GET Requests
    // Handling the "visit" of db
    app.get("/api/notes", (req, res) => {
        return res.json(dbData);
    });

    // API POST Request
    // Receive a new note to save on the request body, add 
    //  it to the db.json file, and then return the new note 
    //  to the client.
    app.post("/api/notes", (req, res) => {

        // Since data is array, push to array
        dbData.push(req.body);
        
        // Write file
        fs.writeFile("./db/db.json", JSON.stringify(dbData), function(error) {
            // if an error occurs, log it
            if (error) {
              // stop execution if there is
              console.log(error)
              return console.log(error);
            }
            // finished writing to file
            console.log("Success, Element has been added...");
        });
        // Send response
        res.send(true);
        
    });
};