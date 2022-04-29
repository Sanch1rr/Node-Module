const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Sain baina uu namaig Sanchir gedeg");
});
app.listen(3000);
