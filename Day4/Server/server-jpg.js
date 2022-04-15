var http = require("http");
var fs = require("fs");
var port = 3001;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "image/jpg" });
    fs.readFile("dog.jpg", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(port);
