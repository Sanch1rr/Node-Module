const express = require("express");
const { body, validationResult } = require("express-validator");
const port = 3000;

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/404", function (req, res) {
  res.render("404", { message: "oopsie!" });
});
app.get("/js", function (req, res) {
  var data = {
    name: "John",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("js", { data: data });
});
app.get("/pie", function (req, res) {
  var data = [
    { name: "Apple Pie", url: "/applepie.jpg" },
    { name: "Cherry Pie", url: "/cherrypie.jpg" },
    { name: "Donut", url: "/donuts.jpg" },
  ];
  res.render("pie", { data: data });
});

app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 8, max: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      res.send("My Registeration");
    }
    console.log(req.body);
  }
);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
