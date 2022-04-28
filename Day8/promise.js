const request = require("request");

function printFilms(str, callback) {
  return new Promise((resolve, reject) => {
    request(
      "https://ghibliapi.herokuapp.com/films",
      function (error, response, body) {
        if (error) {
          console.error(`Could not send request to API: ${error.message}`);
          return reject();
        }
        if (response.statusCode != 200) {
          console.error(
            `Expected status code 200 but received ${response.statusCode}`
          );
          return reject();
        }
        if (response) {
          console.log(str);
          return resolve();
        } else {
          return reject();
        }
      }
    );
  });
}

module.exports = printFilms;
