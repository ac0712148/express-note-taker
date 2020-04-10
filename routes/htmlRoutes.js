// Import the path package to get the correct file path for our html
const path = require("path");

// Export a function that accepts an Express app object and sets up
// html routes to server the html files.
module.exports = (app) => {
    // The following code handles the "visit" of a page
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};