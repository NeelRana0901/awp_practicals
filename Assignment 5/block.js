var fs = require("fs");
console.log("Serving User 1");
console.time();
var data = fs.readFileSync("myfile.txt");
console.timeEnd();
console.log(data.toString());
console.log("Serving User 2");
console.log("Serving User 3");
console.log("Serving User 4");
