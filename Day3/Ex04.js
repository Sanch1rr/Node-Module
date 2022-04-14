var http = require("http");

var obj = {
  success: false,
  Data: [
    {
      name: "Sanchir",
      Age: 27,
    },
    {
      name: "Someone",
      Age: 26,
    },
  ],
};

let json = JSON.stringify(obj);
console.log(json);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);

    response.end(json);
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
