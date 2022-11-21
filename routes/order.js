var express = require("express");
var router = express.Router();
// var path = require("path");
// var url = require("url");
// var qs = require("querystring");
var db = require("../lib/db.js");

router.post("/set", function (request, response) {
  //set은 cart 상태와 pay상태만 설정 가능 (order DB에 튜플을 삽입하는 역할)
  //설정할 주문 상태(카트,결제완료),고객 id,주문 메뉴, 주문 스타일,인원수, 추가변경사항 넘겨받음
  var post = request.body;
  var state = "Cart"; //cart or pay
  var id = request.session.cid; //로그인된 고객만 해당 상태를 set할수있으므로, id는 여기서 처리하자. 세션아이디로.
  var menu = post.menu;
  var style = post.style;
  var num = post.num;
  var change = post.change;
  console.log("Got order Set Signal List is");
  //console.log(post);

  //console.log("id check : ", id);
  db.query(
    `INSERT INTO ORDERS(menu,style,customer_id,change_list,order_status,numbers) VALUES(?,?,?,?,?,?)`,
    [menu, style, id, change, state, num],
    function (err, result) {
      if (err) {
        response.json({ status: "Fail" });
        console.log("set Fail");
      } else {
        response.json({ status: "Success" });
        console.log("set success");
      }
    }
  );
});

router.post("/modify", function (request, response) {
  console.log("Got modify signal");
  //modify는 주문의 상태를 변경 ()
  //주문 번호, 변경할 상태 받음
  var post = request.body;
  var order_id = post.order_id;
  var state = post.state;
  var cid = request.session.cid;
  //console.log(post);
  if (state == "before_pay") {
    //카트에 있는 주문을 전부 결제하는 방식(임시)
    console.log("in before_pay");
    db.query(
      `UPDATE ORDERS SET order_status = ? WHERE order_status =? AND customer_id=?`,
      [state, "Cart", cid],
      function (err, result) {
        if (err) response.json({ status: "Fail" });
        else response.json({ status: "Success" });
      }
    );
  } else if (state == "payment") {
    console.log("in payment");
    db.query(
      `UPDATE ORDERS SET order_status = ? WHERE order_status =? AND customer_id=?`,
      [state, "before_pay", cid],
      function (err, result) {
        if (err) response.json({ status: "Fail" });
        else response.json({ status: "Success" });
      }
    );
  } else {
    db.query(
      `UPDATE ORDERS SET order_status = ? WHERE order_id =?`,
      [state, order_id],
      function (err, result) {
        if (err) response.json({ status: "Fail" });
        else response.json({ status: "Success" });
      }
    );
  }
});
router.post("/get", function (request, response) {
  //state에 맞는 주문을 리턴한다.
  //고객id에 *가 오면 state로 온 상태에 존재하는 전체 주문을 조회(괸리자가실행할부분), else, 고객이 자신의 주문을 확인하는 용도
  //return은 주문번호, 메뉴,스타일,변경사항,주문상태,주문수(갯수)
  var post = request.body;
  //console.log(post);
  var id = post.uid;
  var state = post.state;
  console.log("Got Get Signal");
  //console.log(id);
  if (id == "Manager") {
    //관리자가 조회를 하는 경우
    console.log("Manger Viewing");
    db.query(`SELECT * FROM ORDERS`, function (err, results) {
      //console.log(results);
      response.json(results);
    });
  } else {
    //고객이 자신의 주문을 확인하는 경우
    console.log("Customer Viewing now cid : ", request.session.cid);
    db.query(
      `SELECT * FROM ORDERS WHERE customer_id=? AND order_status=?`,
      [request.session.cid, state],
      function (err, results) {
        if (err) {
          console.log("Load Fail");
          response.send("Fail");
        } else {
          //console.log(results);
          response.json(results);
        }
      }
    );
  }
});
router.post("/pay", function (request, response) {
  //고객의 결제창에서 처리되는 부분
  //고객의 정보들을 전부 리턴해주고 주문 정보들 전부 리턴?
  //need?
});
router.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "/PizzaWebsite/build/index.html"));
});
module.exports = router;
