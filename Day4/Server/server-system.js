var http = require("http");
var fs = require("fs");
var port = 3004;

var server = http
  .createServer((request, response) => {
    if (request.url === "/mp4") {
      response.writeHead(200, { "Content-Type": "video/mp4" });
      const mp4 = fs.readFileSync("video.mp4");
      response.end(mp4);
    }
    if (request.url === "/mp3") {
      response.writeHead(200, { "Content-Type": "audio/mp3" });
      const mp3 = fs.readFileSync("audio.mp3");

      response.end(mp3);
    }
    if (request.url === "/jpg") {
      response.writeHead(200, { "Content-Type": "image/jpg" });
      const jpg = fs.readFileSync("dog.jpg");

      response.end(jpg);
    }
    if (request.url === "/pdf") {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      const pdf = fs.readFileSync("content.pdf");

      response.end(pdf);
    }
    response.end();
  })
  .listen(port);
