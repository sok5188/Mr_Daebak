var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../lib/db.js");

router.post("/get", function (request, response) {
  // 현재 재고 목록을 전부 보여준다.
  db.query(`SELECT * FROM STOCK`, function (err, result) {
    if (err) response.send("Fail");
    else response.json(result);
  });
});

router.post("/set", function (request, response) {
  var post = request.body;
  var steak = post.steak;
  var salad = post.salad;
  var egg = post.egg;
  var bacon = post.bacon;
  var bread = post.bread;
  var ingredients = [steak, salad, egg, bacon, bread];
  console.log(ingredients[0]);
  db.query(`SELECT * FROM STOCK`, function (err, results) {
    console.log(results);
    db.query(
      `UPDATE STOCK SET steak=?,salad=?,egg=?,bacon=?,bread=?`,
      [
        results[0].steak + steak,
        results[0].salad + salad,
        results[0].egg + egg,
        results[0].bacon + bacon,
        results[0].bread + bread,
      ],
      function (err2, result) {
        if (err2) {
          response.send("Fail");
        } else {
          response.send("Success");
        }
      }
    );
  });
});

module.exports = router;
