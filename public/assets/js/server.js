const express = require("express");
const path = require("path");

// Initialization of express server app
const app = express();
const PORT = 3000;

// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname,'/public/notes.html'));
});
// GET * - Should return the index.html file


app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`);
});