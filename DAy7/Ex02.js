const http = require("http");
const https = require("https");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const fs = require("fs");

eventEmitter.on("films", () => {
  https
    .get("https://ghibliapi.herokuapp.com/films", (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });
      resp.on("end", () => {
        console.log(data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
  console.log("Хүсэлтийг амжилттай хүлээж авлаа");
});
http
  .createServer((request, response) => {
    if (request.url === "/films") {
      eventEmitter.emit("films");
    }
  })
  .listen(3001);
