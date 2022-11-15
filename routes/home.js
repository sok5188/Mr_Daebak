var express = require("express");
const { appendFile } = require("fs");
const { route } = require(".");
var router = express.Router();
var auth = require("../lib/auth.js");
var path = require("path");

// router.get("/", function (request, response) {
//   var menu = `<a href="/order?id=1">menu1</a>
//       <a href="/order?id=2">menu2</a>
//       <a href="/order?id=3">menu3</a>
//       <a href="/order?id=4">menu4</a>
//       `;
//   response.send(`${auth.Status(request, response)}  ${menu}`);
// });
router.get("/", function (request, response) {
  response.sendFile(
    path.join(__dirname, "/React/PizzaWebsite/build/index.html")
  );
});

module.exports = router;
