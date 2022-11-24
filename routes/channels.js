var express = require('express');
var router = express.Router();
var channels = require('../src/repositories/channels');

router.get('/', function(req, res, next) {
    res.send('channels');
  });


module.exports = router;