var fs = require("fs");
console.log("Serving User 1");
console.time();
var data = fs.readFile("myfile.txt", function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.timeEnd();
console.log("Serving User 2");
console.log("Serving User 3");
console.log("Serving User 4");
