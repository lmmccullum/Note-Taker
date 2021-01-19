var express = require("express");

var app = express();

var PORT = process.env.PORT || 3080;

// Express Handle Data Parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML Routes

require("./routes/htmlRoutes")(app);

// // API Routes

require("./routes/apiRoutes")(app);

// Listener

app.listen(PORT, function () {
  console.log("App is now listening on PORT: " + PORT);
});
