var http = require("http");
var fs = require("fs");
var port = 3002;
http
  .createServer((request, response) => {
    response.writeHead(200);
    fs.readFile("Ex03.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("Operation succes");
        console.log(data);
        response.end(data);
      }
    });
  })
  .listen(port);
