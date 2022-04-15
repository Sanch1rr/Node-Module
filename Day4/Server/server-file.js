var http = require("http");
var fs = require("fs");
var port = 3000;

var server = http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    const pdf = fs.readFileSync("content.pdf");

    response.end(pdf);
  })
  .listen(port);
