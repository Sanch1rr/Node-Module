const express = require("express");
const request = require("request");
const app = express();

app.get("/films", (req, res) => {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      if (error) {
        throw error;
      } else {
        const films = JSON.parse(body);
        const table1 = "<table border =5>";
        const table2 = "</table>";
        tableHead = `<tr>
        <th> Title</th>
        <th> Original Title</th>
        <th> Original Title Romanised</th>
        <th> Image</th>
       

        </tr>
        
        `;

        let tableMain = "";
        films.map((e) => {
          tableMain += `<tr>
            <td>${e.title}</td>
            <td>${e.original_title}</td>
            <td>${e.original_title_romanised}</td>
            <td> <img style= "width:100px" src = ${e.image}></td>
            </tr>`;
        });
        let filmsHtml = table1 + tableHead + tableMain + table2;
        res.send(filmsHtml);
      }
    }
  );
});
app.listen(5000);
