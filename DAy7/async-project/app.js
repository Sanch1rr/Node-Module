const http = require("http");
const request = require("request");

function printFilms(str, callback) {
  const request = require("request");
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      callback(console.log(str));
    }
  );
}
module.exports = printFilms;
