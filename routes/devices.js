var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/devices');

router.get('/', async function (req, res, next) {
    /* console.log(req.query.locationName);
    if (req.query.locationName){
        return res.json( await locations.getAll({locationName: req.query.locationName}))
    } */
    res.json(await devices.getAll());
});

router.post('/', async function (req, res, next) {
    try {
        let saved = await devices.save(req.body.identifier)
        res.status(201).json({ "message": saved });
    } catch (e) {
        res.status(404)
    }
})
module.exports = router;