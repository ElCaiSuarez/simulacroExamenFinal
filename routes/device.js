var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/devices');
var favorites = require('../src/repositories/favorites');

router.post('/:id/favorites', async function (req, res, next) {
    console.log('POST/device/:id/favorites');
    console.log(req.params.id);
    console.log(req.body);
    let deviceAux = await devices.getById(req.params.id)
    if(!deviceAux){
        return res.status(400).json({ "message": "UNREGISTERED_DEVICE" })
    }
    try {

        let saved = await favorites.save(req.body.channelId, deviceAux.id)
        res.status(201).json({ "message": saved });
    } catch (e) {
        res.status(500).json({"message": e})
    }
})

router.get('/:id/favorites', async function (req, res, next) {
    console.log('GET/device/:id/favorites');
    console.log(req.params.id);
    let deviceAux = await devices.getById(req.params.id)
    if(!deviceAux){
        return res.status(400).json({ "message": "UNREGISTERED_IDENTIFIER" })
    }
    res.json(await favorites.getAll(deviceAux.id));
});

router.delete('/:id/channels/:id', async function (req, res, next) {
    console.log('DELETE/device/:id/channels/:id');
    console.log(req.params.id);
    console.log(req.body);
    let deviceAux = await devices.getById(req.params.id)
    if(!deviceAux){
        return res.status(400).json({ "message": "UNREGISTERED_DEVICE" })
    }
    try {
        //let saved = await favorites.save(req.body.channelId, deviceAux.id)
        res.status(201).json({ "message": saved });
    } catch (e) {
        res.status(500).json({"message": e})
    }
})

router.patch('/:id/channels/:id', async function (req, res, next) {
    console.log('PATCH/device/:id/channels/:id');
    console.log(req.params.id);
    console.log(req.body);
    let deviceAux = await devices.getById(req.params.id)
    if(!deviceAux){
        return res.status(400).json({ "message": "UNREGISTERED_DEVICE" })
    }
    try {
        //let saved = await favorites.save(req.body.channelId, deviceAux.id)
        res.status(201).json({ "message": saved });
    } catch (e) {
        res.status(500).json({"message": e})
    }
})

module.exports = router;