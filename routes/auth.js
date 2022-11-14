var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../lib/db.js");
router.get("/login", function (req, res) {
  console.log("entered login page");
  let tmp_html = `
        <form action="/auth/login_process" method="post">
            <p><input type="text" name="id" placeholder="id"></p>
            <p><input type="password" name="password" placeholder="password"></p>
            <p>
                <input type="submit" value="login">
            </p>
        </form>
    `;
  res.send(tmp_html);
});

router.post("/login_process", function (request, response) {
  //implement Login function
  //console.log("entered login process");
  var post = request.body;
  var id = post.id;
  var password = post.password;

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
        //session에 저장할 내용을 save를 호출해서 저장한 후 callback함수로 리다이렉션을 해줌
        request.session.save(function () {
          if (name[0].name == "Manager") response.redirect(`/manage`);
          else response.redirect(`/order`);
        });
      } else {
        response.send("Log In Fail..");
        //팝업띄우거나 뭐.. 나중에 처리
      }
    }
  );
});

router.get("/logout", function (request, response) {
  request.session.destroy(function (err) {
    response.redirect(`/`);
  });
});

router.get("/signin", function (request, response) {
  let tmp_html = `
        <form action="/auth/signin_process" method="post">
            <p><input type="text" name="id" placeholder="id"></p>
            <p><input type="password" name="password" placeholder="password"></p>
            <p><input type="text" name="name" placeholder="name"></p>
            <p><input type="number" name="credit" placeholder="credit"></p>
            <p><input type="number" name="phone" placeholder="phone"></p>
            <p>
                <input type="submit" value="signin">
            </p>
        </form>
    `;
  response.send(tmp_html);
});

router.post("/signin_process", function (request, response) {
  var post = request.body;
  var id = post.id;
  var password = post.password;
  var name = post.name;
  var credit = post.credit;
  var phone = post.phone;
  var visit = 0;
  //id중복체크 (나중에 아이디 옆에 중복확인 버튼을 만들어서 중복확인프로세스를 따로 만들어서 처리하고 여기서는 바로 insert)
  db.query(`SELECT id FROM AUTH WHERE id=?`, [id], function (id) {
    console.log(id);
    if (id != null) {
      //이미 auth에 해당 id 존재
      //일단은 그냥 리다이렉트
      response.redirect("/signin");
    }
    console.log("not in table");
  });
  db.query(
    `INSERT INTO AUTH VALUES(?,?,?,?,?,?)`,
    [id, name, credit, phone, visit, password],
    function (err, result) {
      if (err) {
        console.log("error!!");
        throw err;
      }
      //3xx는 redirection을 의미 (1xx는 info, 2xx:success, 4xx:client err, 5xx:server err)
      response.writeHead(302, { Location: `/` });
      response.end();
    }
  );
});
module.exports = router;
