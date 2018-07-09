const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const passport = require("passport");
const Affiliate = require("./models/Affiliate");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(passport.initialize());
server.use(passport.session());

// passport.serializeUser(Affiliate.serializeUser());
// passport.deserializeUser(Affiliate.deserializeUser());

server.use([require("./routes/affiliates"), require("./routes/leads")]);

server.get("/ping", (req, resp) => {
  resp.send("OK!");
});

server.listen(7000);
