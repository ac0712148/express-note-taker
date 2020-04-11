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
        const newNote = req.body;
        // Add a unique id property to when its saved
        newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();
        // Since data is array, push to array
        dbData.push(newNote);
        
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
        // Send response, return a new note to client
        return res.json({});
        
    });

    // API DELETE Request
    // Receive a query parameter containing the id of a note to delete
    app.delete("/api/notes/:id", (req, res) => {
      const noteIndex = dbData.findIndex(
        (note) => note.id === req.params.id
      );
      if(noteIndex === -1) {
        return res.sendStatus(404);
      }
      dbData.splice(noteIndex, 1);
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
      return res.sendStatus(200);
    });
};