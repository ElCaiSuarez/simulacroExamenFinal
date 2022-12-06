var express = require('express');
var router = express.Router();
var categories = require('../src/repositories/categories');


router.get('/', async function (req, res, next) {

    res.json(await categories.getAll());
});

router.get('/:id/channels', async function (req, res, next) {
    console.log('GET/categories/:id/channels');
    console.log(req.params.id);
    let categoryAux = await categories.getById(req.params.id)
    if(!categoryAux){
        return res.status(400).json({ "message": "UNREGISTERED_CATEGORY" })
    }
    res.json(await categories.getChannelsByCategory(categoryAux.id));
});

module.exports = router;