const express = require("express");
const request = require("request");
const app = express();

app.get("/api/foods", (req, res) => {
  request(
    "https://dev-api.mstars.mn/api/foods",
    function (error, response, body) {
      if (error) {
        throw error;
      } else {
        const foods = JSON.parse(body);
        const table1 = "<table border =5>";
        const table2 = "</table>";
        tableHead = `<tr>
        <th> Хоолны нэр</th>
        <th> Хоолны үнэ</th>
        <th> Хоолны порц</th>
        <th> Хоолны үлдэгдэл</th>
        </tr>
        
        `;
        let tableMain = "";
        foods.data.map((e) => {
          tableMain += `<tr>
            <td>${e.name}</td>
            <td>${e.price}</td>
            <td>${e.portion}</td>
            <td>${e.stock}</td>
            </tr>`;
        });
        let foodsHtml = table1 + tableHead + tableMain + table2;
        res.send(foodsHtml);
      }
    }
  );
});

app.listen(5000);
