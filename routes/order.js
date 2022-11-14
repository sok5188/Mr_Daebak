var express = require("express");
var router = express.Router();
var path = require("path");
var url = require("url");
var qs = require("querystring");
var db = require("../lib/db.js");

router.get("/", function (request, response) {
  console.log("entered order page");
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  var option = ["simple", "grand", "deluxe"];
  var dinner;
  var title;
  if (queryData.id == 1) {
    //발렌타인 디너 : 작은 하트 모양과 큐피드가 장식된 접시에 냅킨과 함께 와인과 스테이크
    dinner = ["wine", "steak"];
    title = "valentine";
  } else if (queryData.id == 2) {
    //프렌치 디너 : 커피 한잔 와인 한잔 샐러드 스테이크
    dinner = ["coffee", "glass of wine", "salad", "steak"];
    title = "french";
  } else if (queryData.id == 3) {
    //잉글리시 디너 : 에그 스크램블 베이컨 빵 스테이크
    dinner = ["scrambled egg", "bacon", "bread", "steak"];
    title = "english";
  } else {
    //샴페인 디너 :항상 인 식사이고 샴페인 한병 개의 바게트빵 커피 한포트, 와인 스테이크
    //그랜드 또는 디럭스만 가능
    dinner = ["champagne", "baguette", "a pot of coffee", "wine", "steak"];
    title = "champagne";
    option.shift();
  }
  //여기서 정보를 process한테 보내줘야함 (/order/process)
  response.send("Not implemented TT");
});
router.post("/process", function (request, response) {
  //주문 메뉴, 주문 스타일, 추가,변경사항 넘겨받음
  var post = request.body;
  var menu = post.menu;
  var style = post.style;
  var change = post.change;

  //주문 가능여부 체크
  // 불가능시 팝업을 띄우고 메인으로 돌아가든 뭐 알아서 빠꾸
  // 가능하면 주문완료창으로 이동 (/order/list)
});
router.get("/list", function (request, response) {
  //주문 Db에서 고객id 외래키 이용해서 정보를 불러와 보여줌
  //뭐 홈으로 리다이렉트 하는 버튼 있어야함
});
module.exports = router;
