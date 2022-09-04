const bodyParser = require("body-parser");
const fs = require('fs');
const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  res.sendFile(path.join(__dirname, '/data.json'));
});

app.post("/api/create", (req, res) => {
  console.log(req.body.data);
  let obj = {};

 fs.readFile(path.join(__dirname, '/data.json'), 'utf8', function readFileCallback(err, data){
  if (err){
      console.log(err);
  } else {
  obj = JSON.parse(data); //now it an object
  obj.push(req.body.data);
  json = JSON.stringify(obj);
  fs.writeFile(path.join(__dirname, '/data.json'), json, function(err){
    if (err) throw err;
    console.log('complete');
  });
}});

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});