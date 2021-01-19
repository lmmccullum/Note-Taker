const fs = require("fs");
var savedNotes = require("../db/db.json");

const apiRoutes = function (app) {
  app.get("/api/notes", function (req, res) {
    console.log("r")
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
app.delete("/api/notes/:id", (req, res)=> {
let noteId = req.id;
savedNotes.splice(noteId, 1);
fs.writeFile('./db/db.json',JSON.stringify(savedNotes),function(err){
  err ? console.log(err) : console.log('We are deleting your note')
})
res.sendStatus(200);
})
};
module.exports = apiRoutes