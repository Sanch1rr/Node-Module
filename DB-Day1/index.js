const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dugtuitaihun901",
  database: "employees",
  multipleStatements: true,
});
connection.connect((err) => {
  if (!err) console.log("Database connected succesfully");
  else
    console.log(
      "Database connection failed" + JSON.stringify(err, undefined, 2)
    );
});

app.get("/employees", (req, res) => {
  const limit = req.query;
  console.log(limit);
  connection.query(
    "select * from employees limit " + limit.limit,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

app.get("/employees/:id", (req, res) => {
  connection.query(
    "select * from employees where emp_no = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/employees", (req, res) => {
  const employee = req.body;
  console.log(employee);
  const empNO = employee.emp_no;
  const birthDate = employee.birth_date;
  const firstName = employee.first_name;
  const lastName = employee.last_name;
  const gender = employee.gender;
  const hireDate = employee.hire_date;

  connection.query(
    `insert into employees (emp_no, birth_date,
          first_name, last_name, gender, hire_date) values(?, ?, ?, ?, ?, ? ) `,

    [empNO, birthDate, firstName, lastName, gender, hireDate],
    (err, rows, fields) => {
      if (!err) {
        res.send("i have created new user");
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(3000),
  () => console.log("Express server started at port no : " + 3000);
