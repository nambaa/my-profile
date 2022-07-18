const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.static("public"));
const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.listen(PORT);
console.log("my app is running on port", PORT);
