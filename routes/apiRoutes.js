const fs = require("fs");
var savedNotes = require("../db/db.json");

const apiRoutes = function (app) {
  app.get("/api/notes", function (req, res) {
    console.log("recieve request")
    for(let i = 0; i < savedNotes.length; i ++) {
      savedNotes[i].id = i;
    }
    return res.json(savedNotes);
  });

  //  return the new note to the client??????????????????
  app.post("/api/notes", function (req, res) {
    let data = req.body;
    savedNotes.push(data)
    fs.writeFile('./db/db.json',JSON.stringify(savedNotes),function(err){
      err ? console.log(err) : console.log('Saving Data')
  })
  res.sendStatus(200);
  });

  // new note to JSON with Id
//   newNote.id = savedNotes.length.toString();

//   savedNotes.push(newNote);

//   // Delete Notes

// // receive a query parameter containing the id of a note to delete?????????????????
// app.delete("/api/notes/:id", function(req, res) {
//     var id = req.params.id;
    
//     var atID = (element) => element.id === id;
//     var deleteNote = savedNote.findIndex(atID);
    
//     savedNote.splice(deleteNote, 1);
// });

// New Data

// fs.writeFile("./db/db.json", JSON.stringify(savedNote),(err) => {
//     if (err) {
//         console.log(err);
//         res.sendStatus(404);
//     } else {
//         console.log("Success!")
//         res.sendStatus(200);
//     }
// });


};
module.exports = apiRoutes