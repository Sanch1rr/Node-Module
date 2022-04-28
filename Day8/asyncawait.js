const printFilms = require("./promise");

async function printAllAsyncs() {
  await printFilms("A", () => {});
  await printFilms("B", () => {});
  await printFilms("C", () => {});
}
printAllAsyncs();
