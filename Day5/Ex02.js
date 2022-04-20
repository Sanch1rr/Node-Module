var http = require("http");

let obj = {
  Name: "Bruce",
  HeroName: "Batman",
};

let json = JSON.stringify(obj);
http
  .createServer((request, response) => {
    response.writeHead(200, json);
    response.end(json);
  })
  .listen(3001);
