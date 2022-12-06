var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/devices');
var unlockeds = require('../src/repositories/unlockeds');
var lockeds = require('../src/repositories/lockeds');
var channels = require('../src/repositories/channels');

router.get('/', async function (req, res, next) {
    console.log('GET/devices/');
    //console.log(req.body);
    res.json(await devices.getAll());
});

router.get('/:id', async function (req, res, next) {
    console.log('GET/devices/:id');
    console.log(req.params.id);
    res.json(await devices.getById(req.params.id));
});

router.post('/', async function (req, res, next) {
    console.log('POST/devices');
    console.log(req.body);
    try {
        let saved = await devices.save(req.body.identifier)
        res.status(201).json({ "message": saved });
    } catch (e) {
        res.status(500).json({"message": e})
    }
})

router.patch('/:id', async function (req, res, next) {
    console.log('PATCH/devices/:id');
    console.log(req.params.id);
    if (!req.params.id) {
        return res.status(400).json({ "message": "MISSING_IDENTIFIER" })
    }
    const deviceAux = await devices.exist(req.params.id)
    console.log(deviceAux.enabledAt);
    if (!deviceAux) {
        return res.status(400).json({ "message": "UNREGISTERED_IDENTIFIER" })
    }
    try {
        let saved
        if(deviceAux.enabledAt == null){
            saved = await devices.habilitar(deviceAux.identifier)
            res.status(201).json({ "enabledAt": saved });
        }else{
            saved = await devices.deshabilitar(deviceAux.identifier)
            res.status(201).json({ "disabledAt": saved });
        }        
        
    } catch (e) {
        res.status(500).json({ "message": e })
    }
})

router.get('/:deviceId/channels/:channelId', async function (req, res, next) {
    console.log('GET/device/:deviceId/channels/:channelId');
    console.log(req.params.deviceId + ' ' + req.params.channelId);
    let deviceAux = await devices.getById(req.params.deviceId)
    if(!deviceAux){
        return res.status(400).json({ "message": "UNREGISTERED_IDENTIFIER" })
    }
    let channelAux = await channels.getById(req.params.channelId)
    if(!channelAux){
        return res.status(400).json({ "message": "UNREGISTERED_CHANNEL" })
    }
    res.json(await unlockeds.getAll(deviceAux.id, channelAux.id));
});

module.exports = router;