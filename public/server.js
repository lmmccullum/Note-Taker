var express = require("express");
	var path = require("path");
	var app = express();
	
var PORT = process.env.PORT || 3080;

// HTML Routes

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

// API Routes

app.get("/api/notes", function (rec, res) {
    db.json(savedNotes);
});

//  return the new note to the client??????????????????
app.post("/api/notes", function (req, res) {
    var newNote = req.body;
});

// Delete Notes

// receive a query parameter containing the id of a note to delete?????????????????
app.delete("/api/notes/:id", function(req, res) {}
