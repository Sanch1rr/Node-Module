const fs = require("fs-extra");
const request = require("request");
const printFilms = require("../DAy7/async-project/app");

printFilms((str) => {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      console.log(str);
    }
  );
});
