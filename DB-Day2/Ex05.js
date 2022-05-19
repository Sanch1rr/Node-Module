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

app.get("/managers/salary", (req, res) => {
  connection.query(
    `select * from dept_manager a left join departments b on a.dept_no = b.dept_no  left join salaries c on a.emp_no =c.emp_no;`,

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
