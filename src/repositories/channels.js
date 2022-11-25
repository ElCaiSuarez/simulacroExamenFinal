const { Channel } = require('../../db/models')

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
    return await Channel.findAll(query)
}
module.exports = {
    getAll,
}