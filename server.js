var express = require("express");
var session = require("express-session");
var path = require("path");
var app = express();
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");

var authRouter = require("./routes/auth.js");
var orderRouter = require("./routes/order.js");
var stockRouter = require("./routes/stock");
var cors = require("cors");
//app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);
app.use(express.static(path.join(__dirname, "PizzaWebsite/build")));
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "PizzaWebsite/build/index.html"));
});

app.use("/auth", authRouter);
app.use("/order", orderRouter);
app.use("/stock", stockRouter);

app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "PizzaWebsite/build/index.html"));
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
const port = process.env.port || 8008;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
