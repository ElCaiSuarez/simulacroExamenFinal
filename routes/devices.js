var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/devices');

router.get('/', function(req, res, next) {
    res.send('devices');
  });

module.exports = router;