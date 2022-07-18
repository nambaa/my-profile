const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.static("public"));
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
app.get("/ejs", (req, res) => {
  res.render("index");
});
app.get("/", function (req, res) {
  res.render("index", { name: "naba" });
});
app.get("/404", function (req, res) {
  res.render("404", { message: "oopsie!" });
});

app.get("/api", (req, res) => {
  res.send("hello world");
});
app.get("/js", function (req, res) {
  var data = {
    name: "naba",
    hobbies: ["playing soccer", "playing e-sport", "cycling"],
  };
  res.render("js", { data: data });
});

app.listen(PORT);
console.log("my app is running on port", PORT);
