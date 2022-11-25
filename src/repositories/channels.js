const { Channel, Categorie } = require('../../db/models')

const queryAttributes = {
    attributes: {
        exclude: ['updatedAt', 'createdAt']
    }
}

const includeCategorie = {
    model: Categorie,
    attributes: ['name']
}

/* const includeCategorie = {
    model: Categorie,
    attributes: ['name'],
}
 */
async function getAll() {
    let query = {
        where: {},
        attributes: queryAttributes.attributes,
        include: [includeCategorie]
    }
    return await Channel.findAll(query)
}

module.exports = {
    getAll,
}