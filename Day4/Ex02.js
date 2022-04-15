var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1>Hello Node!!!!</h1>\n");
    response.write("<p>http response</p>\n");
    response.write(`<ol>
    List
    <ul>HI!</ul>
    <ul>Bye</ul>
    <ul>HI!</ul>
    <ol/>`);

    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
