var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")
var unsplash = require("unsplash-js")
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });
});