var express = require("express");
var session = require("express-session");
var fs = require("fs");
//var FileStore = require("session-file-store")(session);
var app = express();
var port = 4000;
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
var homeRouter = require("./routes/home.js");
var authRouter = require("./routes/auth.js");
var orderRouter = require("./routes/order.js");
var manageRouter = require("./routes/manage.js");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);

app.use("/", homeRouter);
app.use("/auth", authRouter);
app.use("/order", orderRouter);
app.use("/manage", manageRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
