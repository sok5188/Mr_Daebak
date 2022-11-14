var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../lib/db.js");

router.get("/", function (request, response) {
  console.log("entered manage page");
  //추후 관리자 페이지 구현.
  response.send("Not implemented TT");
});

module.exports = router;
