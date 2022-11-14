var db = require("./db");
var template = require("./template.js");
var url = require("url");
var qs = require("querystring");
var path = require("path");
let sanitize = require("sanitize-html");
exports.home = function (request, response) {
  
    var title = "Welcome";
    var description = "Hello, Node.js";
    //var list = template.list(topic);
    var html = template.HTML(
      title,
      "",
      `<h2>${title}</h2>${description}`,
      `<a href="/order?id=1">menu1</a>
      <a href="/order?id=2">menu2</a>
      <a href="/order?id=3">menu3</a>
      <a href="/order?id=4">menu4</a>
      `
    );
    response.writeHead(200);
    response.end(html);
  
};
exports.order=function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  var option=["simple","grand","deluxe"];
  var dinner;
  var title ;
  if(queryData.id==1){
    //발렌타인 디너 : 작은 하트 모양과 큐피드가 장식된 접시에 냅킨과 함께 와인과 스테이크
    dinner=["wine","steak"];
    title="valentine"
  }else if(queryData.id==2){
    //프렌치 디너 : 커피 한잔 와인 한잔 샐러드 스테이크
    dinner=["coffee","glass of wine","salad","steak"];
    title="french";
  }else if(queryData.id==3){
    //잉글리시 디너 : 에그 스크램블 베이컨 빵 스테이크
    dinner=["scrambled egg","bacon","bread","steak"];
    title="english";
  }
  else{
    //샴페인 디너 :항상 인 식사이고 샴페인 한병 개의 바게트빵 커피 한포트, 와인 스테이크
    //그랜드 또는 디럭스만 가능
    dinner=["champagne","baguette","a pot of coffee","wine","steak"];
    title="champagne";
    option.shift();
  }
//리스트를 쭉 보여주고 거기에 대해서 수정할 수 있게끔

    var description = "";
    var list = template.list(dinner);
    var html = template.HTML(
      title,
      list,
      `<h2>${title}</h2>${description}`,
      `
      ${template.grade(option)}
      
      `
    );
  response.writeHead(200);
    response.end(html);
}
