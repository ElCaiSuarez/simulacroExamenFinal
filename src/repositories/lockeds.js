const { Locked } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}

/* const includeChannel = {
    model: Channel,
    attributes: ['id','name','logoUrl']
} */

async function getAll() {
    let query = {
        where: {},
        attributes: queryAttributes.attributes
    }
    return await Categorie.findAll(query)
}

async function lockChannelByDevice(deviceId, channelId, lockedCode) {
    let query = {
        where: {id:id},
        attributes: queryAttributes.attributes,
        include: [includeChannel]
    }
    return await Categorie.findAll(query)
}

module.exports = {
    getAll,
    lockChannelByDevice

}