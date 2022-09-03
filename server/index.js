const express = require("express");
const path = require('path')
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, '/data.json'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});