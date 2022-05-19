const express = require("express");
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dugtuitaihun901",
  database: "employees",
  multipleStatements: true,
});
connection.connect((err) => {
  if (!err) {
    console.log("database connected succesfully");
  } else {
    console.log("error");
  }
});

app.get("/company", (req, res) => {
  const request = req.query;
  console.log(request.title);
  connection.query(
    `select count(*) as positionNumber from employees e left join titles t on e.emp_no = t.emp_no where title = ?`,
    [request.title],
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

app.put("/departments", (req, res) => {
  connection.query("lock tables departments read;");
  connection.query("select count(*) from departments;", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.send(err);
    }
  });
  res.send("departments updated");
});

app.get("dept_emp", (req, res) => {
  connection.query("select count(*) from dept_emp;", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});
app.get("/unlock", (req, res) => {
  connection.query("unlock tables;");
  res.send("unlocked");
});
app.listen(3000, () => {
  console.log("app is started succesfully" + 3000);
});
