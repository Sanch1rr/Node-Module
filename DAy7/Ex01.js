const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээж авлаа");
});
http
  .createServer((request, response) => {
    if (request.url === "/") {
      eventEmitter.emit("start");
    }
    response.end();
  })
  .listen(3000);
