const { Channel, Categorie } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['CategorieId','categorieId','updatedAt', 'createdAt']
    }
}

const includeCategorie = {
    model: Categorie,
    attributes: ['name']
}

async function getAll() {
    let query = {
        where: {},
        attributes: queryAttributes.attributes,
        include: [includeCategorie]
    }
    return await Channel.findAll(query)
}

async function getAll(categorieId) {
    let query = {
        where: {categorieId:categorieId},
        attributes: queryAttributes.attributes,
        include: [includeCategorie]
    }
    return await Channel.findAll(query)
}

async function getById(id) {
    let query = {
        where: {id:id},
        attributes: queryAttributes.attributes,
        include: [includeCategorie]
    }
    return await Channel.findOne(query)
}

module.exports = {
    getAll,
    getById
}