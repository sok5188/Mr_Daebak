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
  var state = "Cart";
  var id = request.session.cid; //로그인된 고객만 해당 상태를 set할수있으므로, id는 여기서 처리하자. 세션아이디로.
  var menu = post.menu;
  var style = post.style;
  var num = post.num;
  var total_price = post.total_price;
  var steak_num = post.steak_num;
  var salad_num, egg_num, bacon_num, bread_num;
  salad_num = post.salad_num;
  egg_num = post.egg_num;
  bacon_num = post.bacon_num;
  bread_num = post.bread_num;
  var wine_num = post.wine_num;
  if (!steak_num) steak_num = 0;
  if (!salad_num) salad_num = 0;
  if (!egg_num) egg_num = 0;
  if (!bacon_num) bacon_num = 0;
  if (!bread_num) bread_num = 0;
  if (!wine_num) wine_num = 0;
  var delivery_time = post.delivery_time;
  var delivery_date = post.delivery_date;
  console.log("Got order Set Signal List is");
  console.log(post);
  console.log("salad value check: ", salad_num);
  //console.log("id check : ", id);
  db.query(
    `INSERT INTO ORDERS(menu,style,customer_id,order_status,numbers,steak_num,salad_num,egg_num,bacon_num,bread_num,total_price,wine_num,delivery_time,delivery_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      menu,
      style,
      id,
      state,
      num,
      steak_num,
      salad_num,
      egg_num,
      bacon_num,
      bread_num,
      total_price,
      wine_num,
      delivery_time,
      delivery_date,
    ],
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
    console.log(order_id);
    let stat = true;
    order_id.forEach((element) => {
      db.query(
        `UPDATE ORDERS SET order_status = ? WHERE order_id =?`,
        [state, element],
        function (err, result) {
          if (err) stat = false;
        }
      );
    });
    if (stat) response.json({ status: "Success" });
    else response.json({ status: "Fail" });
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
router.post("/delete", function (request, response) {
  var post = request.body;
  let order_id = post.order_id;
  db.query(
    `DELETE FROM ORDERS WHERE order_id=?`,
    [order_id],
    function (err, result) {
      if (err) response.send("Fail");
      else response.send("Success");
    }
  );
});
router.post("/get_price", function (request, response) {
  console.log("got getprice signal");
  db.query(
    `SELECT SUM(total_price) AS tp FROM ORDERS WHERE order_status=?`,
    ["before_pay"],
    function (err, result) {
      if (err) {
        response.send("Fail");
      } else {
        console.log(result);
        response.json(result);
      }
    }
  );
});
router.post("/getbyid", function (request, response) {
  console.log("got getbyid signal");
  var post = request.body;
  var order_id = post.order_id;
  db.query(
    `SELECT * FROM ORDERS WHERE order_id=?`,
    [order_id],
    function (err, result) {
      if (err) {
        console.log("Fail");
        response.send("Fail");
      } else {
        console.log("Success");
        response.json(result);
      }
    }
  );
});
router.post("/reorder_byid", function (request, response) {
  console.log("got getbyid signal");
  var post = request.body;
  console.log();
  var order_id = post.order_id;
  console.log("target order id : ", order_id);
  db.query(
    `SELECT * FROM ORDERS WHERE order_id=?`,
    [order_id],
    function (err, results) {
      if (err) {
        console.log("Load Fail");
        response.send("Fail");
      } else {
        console.log(results);
        console.log(results[0]);
        //console.log(results.data);
        console.log(results[0].menu, results[0].style);
        db.query(
          `INSERT INTO ORDERS(menu,style,customer_id,order_status,numbers,steak_num,salad_num,egg_num,bacon_num,bread_num,total_price,wine_num,delivery_time,delivery_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          [
            results[0].menu,
            results[0].style,
            request.session.cid,
            "before_pay",
            results[0].numbers,
            results[0].steak_num,
            results[0].salad_num,
            results[0].egg_num,
            results[0].bacon_num,
            results[0].bread_num,
            results[0].total_price,
            results[0].wine_num,
            results[0].delivery_time,
            results[0].delivery_date,
          ],
          function (err2, result) {
            if (err2) {
              console.log("Fail to insert");
              response.send("Fail");
            } else {
              console.log("success to insert");
              response.send("Success");
            }
          }
        );
      }
    }
  );
});

module.exports = router;
