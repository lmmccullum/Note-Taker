var express = require("express");
const { fstat } = require("fs");
	var path = require("path");
	var app = express();
	
var PORT = process.env.PORT || 3080;

// Express Handle Data Parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// HTML Routes

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

// API Routes

app.get("/api/notes", function (rec, res) {
    db.json(savedNote);
});

//  return the new note to the client??????????????????
app.post("/api/notes", function (req, res) {
    db.json()
    var newNote = req.body;
});

// Listener

app.listen(PORT, function() {
});

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
        res.sendStatus(404);
    } else {
        res.sendStatus(200);
    }
});
