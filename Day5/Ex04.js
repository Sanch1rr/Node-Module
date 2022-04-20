var http = require("http");
var fs = require("fs");
var port = 3000;
let obj = {
  Name: "Bruce",
  HeroName: "Batman",
};

let json = JSON.stringify(obj);
var server = http
  .createServer((request, response) => {
    if (request.url === "/html") {
      response.writeHead(200, { "Content-Type": "text/html" });

      response.write("<h1>Hello HTML</h1>");
    } else if (request.url === "/png") {
      response.writeHead(200, { "Content-Type": "image/png" });
      const png = fs.readFileSync("logo.image.png");
      response.end(png);
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(json);
    }
    response.end();
  })
  .listen(port);
