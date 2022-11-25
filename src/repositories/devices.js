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

async function save(identifier){

    return await Device.create({
        identifier,

    })
}

module.exports = {
    getAll,
    save
}