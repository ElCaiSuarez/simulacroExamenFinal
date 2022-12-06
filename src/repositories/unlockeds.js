const { Op } = require('sequelize')
const { Unlocked, Categorie, Channel } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}
const includeCategorie = {
    model: Categorie,
    attributes: ['name']
}

const includeChannel = {
    model: Channel,
    attributes: ['id', 'name', 'logoUrl'],
    include: [includeCategorie]
}

async function getAll(deviceId, channelId) {
    let query = {
        where: {
            [Op.and]: [
                { deviceId: deviceId },
                { channelId: channelId }
            ]
        },
        attributes: queryAttributes.attributes,
        include: [includeChannel]
    }
    return await Unlocked.findOne(query)
}

async function lockChannelByDevice(deviceId, channelId) {
    let query = {
        where: {
            [Op.and]: [
                { deviceId: deviceId },
                { channelId: channelId }
            ]
        },
        attributes: queryAttributes.attributes,
        include: [includeChannel]
    }
    return await Unlocked.destroy(query)
}

module.exports = {
    getAll,
    lockChannelByDevice

}