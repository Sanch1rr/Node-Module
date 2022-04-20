var url = require("url");
var adr = "https://dev-api.mstars.mn/api/foods";
var q = url.parse(adr, true);

console.log(q);
// console.log(q.pathname);
// console.log(q.search);
