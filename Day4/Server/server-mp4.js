var http = require("http");
var fs = require("fs");
var port = 3004;

var server = http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "video/mp4" });
    const mp4 = fs.readFileSync("video.mp4");

    response.end(mp4);
  })
  .listen(port);
