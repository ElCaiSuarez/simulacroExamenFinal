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

async function save(identifier) {

    return await Device.create({
        identifier,
    })
}

async function exist(identifier) {

    return await Device.findOne({ where: { identifier: identifier } })

}

async function habilitar(identifier) {//Egreso Vehiculo
    let enabledAt = new Date();
    let disabledAt = null

    await Device.update({//PATCH bookings: http://localhost:3000/bookings/ + body
        enabledAt: enabledAt,
        disabledAt: disabledAt
    }, {
        where: { identifier: identifier }
    })
    return enabledAt
}

async function deshabilitar(identifier) {//Egreso Vehiculo
    let enabledAt = null
    let disabledAt = new Date();

    await Device.update({//PATCH bookings: http://localhost:3000/bookings/ + body
        enabledAt: enabledAt,
        disabledAt: disabledAt
    }, {
        where: { identifier: identifier }
    })
    return enabledAt
}

module.exports = {
    getAll,
    save,
    exist,
    habilitar,
    deshabilitar
}