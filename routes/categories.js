var express = require('express');
var router = express.Router();
var categories = require('../src/repositories/categories');

router.get('/', function(req, res, next) {
    res.send('categories');
  });


module.exports = router;