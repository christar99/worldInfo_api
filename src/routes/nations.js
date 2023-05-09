var express = require("express");
var router = express.Router();
const controller = require("../controller/nations.controller");

router.get("/", controller.findByName);

module.exports = router;
