var http = require("http");

http
  .createServer(function (req, res) {
    res.end("node js hello world !!! ");
  })
  .listen(6100);

console.log("Server is running live at http://127.0.0.1:6100/");
console.log("node js hello world");
