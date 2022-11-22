var express = require("express");
var router = express.Router();
var db = require("../lib/db.js");
const util = require("util");

router.post("/login_process", function (request, response) {
  //implement Login function
  console.log("entered login process");
  console.log(request);
  var post = request.body;
  var id = post.id;
  var password = post.password;
  console.log("body : ", post);
  console.log("id", id, "password : ", password);
  //console.log(`= = = > request : ${util.inspect(request)}`);
  //(+)id,password sanitize?
  db.query(
    `SELECT name FROM AUTH WHERE id=? AND password=?`,
    [id, password],
    function (err, name) {
      console.log(name[0]);
      if (name[0] != undefined) {
        //login success
        request.session.is_logined = true;
        request.session.name = name[0].name;
        request.session.cid = id;
        //session에 저장할 내용을 save를 호출해서 저장한 후 callback함수로 리다이렉션을 해줌
        request.session.save(function () {
          if (name[0].name == "Manager") response.send("Manager");
          else response.send("Customer");
        });
      } else {
        response.send("Fail");
      }
    }
  );
});

router.post("/logout", function (request, response) {
  console.log("Got a logout Signal");
  request.session.destroy(function (err) {
    response.send("Done");
  });
});

router.get("/check_login", function (request, response) {
  console.log("Got a login check signal");
  if (request.session.is_logined) {
    console.log("he is logined");
    response.json({ name: request.session.name, islogin: "True" });
  } else {
    response.json({ name: "", islogin: "False" });
  }
});
router.post("/signin_process", function (request, response) {
  var post = request.body;
  var id = post.id;
  var password = post.password;
  var name = post.name;
  var credit = post.credit;
  var phone = post.phone;
  var address = post.address;
  var visit = 0;
  //id중복체크 (나중에 아이디 옆에 중복확인 버튼을 만들어서 중복확인프로세스를 따로 만들어서 처리하고 여기서는 바로 insert)
  db.query(`SELECT id FROM AUTH WHERE id=?`, [id], function (id) {
    console.log(id);
    if (id != null) {
      //이미 auth에 해당 id 존재
      response.send("ID Fail");
    }
    console.log("not in table");
  });
  db.query(
    `INSERT INTO AUTH VALUES(?,?,?,?,?,?,?)`,
    [id, name, credit, phone, visit, password, address],
    function (err, result) {
      if (err) {
        response.send("INSERT Fail");
        throw err;
      }
      //3xx는 redirection을 의미 (1xx는 info, 2xx:success, 4xx:client err, 5xx:server err)
      else {
        response.send("Success");
      }
    }
  );
});
router.get("/get", function (request, response) {
  console.log("got auth get signal");
  //주문 결제창에서 유저의 정보 요청
  db.query(
    `SELECT * FROM AUTH WHERE id=?`,
    [request.session.cid],
    function (err, results) {
      if (err) {
        console.log("auth get failed");
        response.send("Fail");
      } else {
        console.log("auth get Success");
        response.json(results);
      }
    }
  );
});
router.post("/set", function (request, response) {
  //주문시 visit증가
  db.query(
    `SELECT visit FROM AUTH WHERE id=?`,
    [request.session.cid],
    function (err, result) {
      if (err) {
        response.send("Fail");
      } else {
        db.query(
          `UPDATE AUTH SET visit=? WHERE id=?`,
          [result[0].visit + 1, request.session.cid],
          function (err2, results) {
            if (err) {
              response.send("Fail");
            } else response.send("Success");
          }
        );
      }
    }
  );
});
router.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "/PizzaWebsite/build/index.html"));
});
module.exports = router;
