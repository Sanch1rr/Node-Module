var http = require("http");
var fs = require("fs");
var port = 3002;
var queryString = require("querystring");

var server = http
  .createServer((request, response) => {
    if (request.url === "/mp4") {
      response.writeHead(200, { "Content-Type": "video/mp4" });
      const mp4 = fs.readFileSync("video.mp4");
      response.end(mp4);
    } else if (request.url === "/mp3") {
      response.writeHead(200, { "Content-Type": "audio/mp3" });
      const mp3 = fs.readFileSync("audio.mp3");

      response.end(mp3);
    } else if (request.url === "/jpg") {
      response.writeHead(200, { "Content-Type": "image/jpg" });
      const jpg = fs.readFileSync("dog.jpg");

      response.end(jpg);
    } else if (request.url === "/pdf") {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      const pdf = fs.readFileSync("content.pdf");

      response.end(pdf);
    } else if (request.url === "/hello") {
      response.writeHead(200, { "Content-Type": "text/html" });

      response.write("<h1>Hello HTML</h1>");
    } else if (request.url === "/q?a=3&x=5&y=6&z=9") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      const { a, x, y, z } = queryString.parse(request.url.slice(3));
      response.end(`${Number(a) + Number(x) + Number(y)}`);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
    }
    response.end();
  })
  .listen(port);
