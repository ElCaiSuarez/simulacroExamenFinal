var express = require('express');
var router = express.Router();
var categories = require('../src/repositories/categories');


router.get('/', async function (req, res, next) {

    res.json(await categories.getAll());
});

module.exports = router;