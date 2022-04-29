const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (request, response) => {
  console.log(request.body);
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      console.log(JSON.parse(data));
      let users = JSON.parse(data);
      users.push(request.body);
      console.log(users);
      fs.writeFile("user.json", JSON.stringify(users), (error) => {
        if (error) {
          throw error;
        } else {
          console.log("Got post request from client");
          response.send("Got the post request");
        }
      });
    }
  });
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  console.log(req.params);

  fs.readFile("./user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const users = JSON.parse(data);
      const filteredUser = users.filter((e) => {
        if (e.id === Number(req.params.userId)) {
          return e;
        }
      });
      res.send(filteredUser);
    }
  });
});
app.listen(3000);
