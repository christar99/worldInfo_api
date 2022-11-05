var express = require('express');
var router = express.Router();
const controller = require('../controller/city.controller');

router.get('/', controller.findByIdx);

module.exports = router;
