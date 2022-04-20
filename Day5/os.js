// 1. call os module
// 2. i want to know the following infromation about your computer
// 2.a. home directory
// 2.b. operating system type
// 2.c. last reboot
// 2.d. username
// write a http server, which works on port = 3000 and return the above infromation in JSON format.
const http = require("http");
const os = require("os");

const home_directory = os.homedir();
const type = os.type();
const last_reboot = os.uptime();
const username = os.hostname();

let obj = {
  home_directory: home_directory,
  type: type,
  last_reboot: last_reboot,
  username: username,
};

let json = JSON.stringify(obj);
http
  .createServer(function (request, response) {
    response.writeHead(200, json);

    response.end(json);
  })
  .listen(3000);
