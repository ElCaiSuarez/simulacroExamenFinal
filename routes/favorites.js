var express = require('express');
var router = express.Router();
var favorites = require('../src/repositories/favorites');

router.get('/', function(req, res, next) {
    res.send('favorites');
  });

module.exports = router;