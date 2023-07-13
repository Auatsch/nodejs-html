const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
  });
  
app.get("/impressum", function (req, res) {
  res.render("impressum");
});

app.get("/datens", function (req, res) {
  res.render("daten");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// taskkill /F /IM node.exe