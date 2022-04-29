const express = require("express");
const request = require("request");
const app = express();
const fs = require("fs");

app.get("/get-data", (req, res) => {
  const readStream = fs.createReadStream("./data/data.csv");
  readStream.on("open", function () {
    readStream.pipe(res);
  });
});
app.listen(3000);
