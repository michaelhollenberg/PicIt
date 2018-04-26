var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");




db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });