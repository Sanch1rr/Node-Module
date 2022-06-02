const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "classicmodels",
  multipleStatements: true,
});
connection.connect((err) => {
  if (!err) {
    console.log("database connected succesfully");
  } else {
    console.log("error");
  }
});

app.put("/employees", (req, res) => {
  const request = req.query;
  console.log(request);
  console.log(req.body);

  connection.query(
    `update employees set lastName = "${req.body.lastName}" , firstName = "${req.body.firstName}" where employeeNumber = ${request.id}`,
    [request],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.get("/employee", (req, res) => {
  const request = req.query.id;
  connection.query(
    `select phone, extension from offices a left join employees b on a.officecode=b.officecode where employeeNumber = ?`,
    [request],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("app is started succesfully" + 3000);
});
