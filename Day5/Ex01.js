var http = require("http");
var fs = require("fs");
var port = 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "image/jpg" });
    const jpg = fs.readFileSync("dog.jpg");

    response.end(jpg);
  })
  .listen(port);
