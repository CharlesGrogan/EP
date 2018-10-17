const mongojs = require("mongojs");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const databaseURL = "Edible Recipes";
const collections = ["recipes"];

const db = mongojs(databaseURL, collections);

db.on("error", function(error) {
  console.log(`Database error ${error}`);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
