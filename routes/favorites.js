var express = require('express');
var router = express.Router();
var favorites = require('../src/repositories/favorites');

router.get('/', async function (req, res, next) {
    /* console.log(req.query.locationName);
    if (req.query.locationName){
        return res.json( await locations.getAll({locationName: req.query.locationName}))
    } */
    res.json(await favorites.getAll());
});

module.exports = router;