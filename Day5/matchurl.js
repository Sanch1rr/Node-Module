var http = require("http");
var fs = require("fs");
var port = 3002;
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/hello") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>Hello Javkhlan</h1>");
      response.end();
    } else if (request.url === "/hello") {
      response.writeHead(200, { "Content-Type": "text/html" });

      response.write("<h1>Hello HTML</h1>");
    } else if (request.url === "/q?a=3&x=5&y=6&z=9") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      const { a, x, y, z } = queryString.parse(request.url.slice(3));
      response.end(`${Number(a) + Number(x) + Number(y)}`);
    } else if (request.url.match(/^\/echo/)) {
      return respondEcho(request, response);
    } else if (request.url.match(/^\/q/)) {
      const value = request.url.split("=");
      response.writeHead(200, { "Content-Type": "text/html" });

      if (value[1] == "why") {
        response.write("<h1>doesnt matter</h1>");
      } else if (value[1] == "hi") {
        response.write("Bye");
      } else {
        response.write("Mori");
      }
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
    }
  })
  .listen(port);
