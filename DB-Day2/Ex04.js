const express = require("express");
const mysql = require("mysql2");

const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
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

app.get("/employees", (req, res) => {
  const request = req.query;
  console.log(request.dept_name);
  connection.query(
    `select sum(salary) as financeDepartmentSalaries from dept_emp a left join salaries b on a.emp_no = b.emp_no left join departments c on a.dept_no = c.dept_no where dept_name = ?`,
    [request.dept_name],
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
