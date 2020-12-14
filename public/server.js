var express = require("express");
	var path = require("path");
	var app = express();
	
var PORT = process.env.PORT || 3080;

app.get("/notes", function (req, res) {
    res.sendFile(path.join("../public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join("../public/index.html"));
});

