var path = require("path");

const htmlRoutes = function (app) {
  app.get("/notes", function (req, res) {
    console.log('we hit the notes path.')
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
module.exports = htmlRoutes