const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my first Docker Node App")
})

app.get("/ga", (req, res) => {
  res.send("Implemented github actions")
})

app.listen(3000, function () {
  console.log("app running on port: 3000 ")
})
