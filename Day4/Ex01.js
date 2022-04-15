var http = require("http");

var obj = {
  Type: "Animal",
  Race: "Sheep",
};
let json = JSON.stringify(obj);
const headers = {
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);

    response.end(json);
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
