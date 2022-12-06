const { Device } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}

async function getAll() {
    let query = {
        where: {},
        attributes: queryAttributes.attributes
    }
    return await Device.findAll(query)
}

async function getById(id) {
    let query = {
        where: {id:id},
        attributes: queryAttributes.attributes
    }
    return await Device.findOne(query)
}

async function save(identifier) {

    return await Device.create({
        identifier,
    })
}

async function exist(identifier) {

    return await Device.findOne({ where: { identifier: identifier } })

}

async function habilitar(identifier) {
    let enabledAt = new Date();
    let disabledAt = null

    await Device.update({
        enabledAt: enabledAt,
        disabledAt: disabledAt
    }, {
        where: { identifier: identifier }
    })
    return enabledAt
}

async function deshabilitar(identifier) {
    let enabledAt = null
    let disabledAt = new Date();

    await Device.update({
        enabledAt: enabledAt,
        disabledAt: disabledAt
    }, {
        where: { identifier: identifier }
    })
    return enabledAt
}

module.exports = {
    getAll,
    getById,
    save,
    exist,
    habilitar,
    deshabilitar
}