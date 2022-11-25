var express = require('express');
var router = express.Router();
var favorites = require('../src/repositories/favorites');

router.get('/', async function (req, res, next) {

    res.json(await favorites.getAll());
});

module.exports = router;