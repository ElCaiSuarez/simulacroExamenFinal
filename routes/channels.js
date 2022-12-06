var express = require('express');
var router = express.Router();
var channels = require('../src/repositories/channels');

router.get('/', async function (req, res, next) {

    try{
        res.json(await channels.getAll());
    }catch (e){
        res.status(500).json({ "message": e })
    }
    
});

router.get('/:id', async function (req, res, next) {
    try{
        res.json(await channels.getById(req.params.id));
    }catch (e){
        res.status(500).json({ "message": e })
    }
});

module.exports = router;