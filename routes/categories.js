var express = require('express');
var router = express.Router();
var categories = require('../src/repositories/categories');

/* router.get('/', function(req, res, next) {
    res.send('categories');
  }); */
router.get('/', async function (req, res, next) {
    /* console.log(req.query.locationName);
    if (req.query.locationName){
        return res.json( await locations.getAll({locationName: req.query.locationName}))
    } */
    res.json(await categories.getAll());
});

module.exports = router;