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

router.patch('/', async function (req, res, next) {
    if (!req.body.identifier) {
        return res.status(400).json({ "message": "MISSING_IDENTIFIER" })
    }
    const deviceAux = await devices.exist(req.body.identifier)
    console.log(deviceAux.enabledAt);
    if (!deviceAux) {
        return res.status(400).json({ "message": "UNREGISTERED_IDENTIFIER" })
    }
    try {
        let saved
        if(deviceAux.enabledAt == null){
            saved = await devices.habilitar(req.body.identifier)
            res.status(201).json({ "enabledAt": saved });
        }else{
            saved = await devices.deshabilitar(req.body.identifier)
            res.status(201).json({ "disabledAt": saved });
        }        
        
    } catch (e) {
        res.status(500).json({ "message": e })
    }
})

module.exports = router;