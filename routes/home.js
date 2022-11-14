var express = require("express");
const { route } = require(".");
var router = express.Router();
var auth = require("../lib/auth.js");

router.get("/", function (request, response) {
  var menu = `<a href="/order?id=1">menu1</a>
      <a href="/order?id=2">menu2</a>
      <a href="/order?id=3">menu3</a>
      <a href="/order?id=4">menu4</a>
      `;
  response.send(`${auth.Status(request, response)}  ${menu}`);
});
module.exports = router;
