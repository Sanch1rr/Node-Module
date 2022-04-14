//NodeJS file core module
// fs module ashiglay gesen ug

var file = require("fs");

// ene moduleiig ashiglaad message.txt gedeg filenii contentiig unshiy
file.readFile("message.txt", (error, data) => {
  if (error) {
    // hervee ymr neg aldaa garval
    console.log("Error is happening");
    throw error;
  } else {
    // hervee ymr neg aldaa garahgui bol datag hevel
    console.log("Content: " + data);
  }
});
