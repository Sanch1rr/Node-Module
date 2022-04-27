const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/?data=png") {
      fs.readFile("logo.image.png", (error, data) => {
        const type = request.url.split("=")[1];
        if (error) {
          throw error;
        } else {
        }
      });
    }
    response.end();
  })
  .listen(3000);
