var http = require("http");
var fs = require("fs");
var port = 3003;

var server = http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "audio/mp3" });
    const mp3 = fs.readFileSync("audio.mp3");

    response.end(mp3);
  })
  .listen(port);
