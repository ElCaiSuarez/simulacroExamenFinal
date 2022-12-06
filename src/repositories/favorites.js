const { Favorite, Channel, Categorie } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['DeviceId','ChannelId','channelId','deviceId','updatedAt', 'createdAt']
    }
}

const includeCategorie = {
    model: Categorie,
    attributes: ['name']
}

const includeChannel = {
    model: Channel,
    attributes: ['name','logoUrl'],
    include: [includeCategorie]
}

async function getAll(deviceId) {
    let query = {
        where: {deviceId:deviceId},
        attributes: queryAttributes.attributes,
        include: [includeChannel]
    }
    return await Favorite.findAll(query)
}

async function save(channelId, deviceId) {

    return await Favorite.create({
        channelId,
        deviceId
    })
}

module.exports = {
    getAll,
    save
}