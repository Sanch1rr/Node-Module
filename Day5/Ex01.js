var http = require("https");
var fs = require("fs");
http
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
      console.log(foods);
      fs.appendFile("foods.json", JSON.stringify(foods), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("appended succesfully");
        }
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
