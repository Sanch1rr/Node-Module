var fs = require("fs");
var content = "\nWe are appending this file synchronously";

fs.appendFileSync("message.txt", content);
console.log("File Appended Successfully");
