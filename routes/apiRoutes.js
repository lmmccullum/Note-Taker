const { fstat } = require("fs");
var savedNotes = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    db.json(savedNote);
  });

  //  return the new note to the client??????????????????
  app.post("/api/notes", function (req, res) {
    db.json();
    var newNote = req.body;
  });

  // new note to JSON with Id
  newNote.id = savedNotes.length.toString();

  savedNotes.push(newNote);

  // Delete Notes

// receive a query parameter containing the id of a note to delete?????????????????
app.delete("/api/notes/:id", function(req, res) {
    var id = req.params.id;
    
    var atID = (element) => element.id === id;
    var deleteNote = savedNote.findIndex(atID);
    
    savedNote.splice(deleteNote, 1);
});

// New Data

fs.writeFile("./db/db.json", JSON.stringify(savedNote),(err) => {
    if (err) {
        console.log(err);
        res.sendStatus(404);
    } else {
        console.log("Success!")
        res.sendStatus(200);
    }
});


};
