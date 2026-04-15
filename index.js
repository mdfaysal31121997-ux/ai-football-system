const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("AI Football System Running ⚽");
});

app.listen(5000, () => {
  console.log("Server running");
});
