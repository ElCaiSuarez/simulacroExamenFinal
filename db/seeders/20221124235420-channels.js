'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Channels', [{
      name: "America TV",
      logoUrl: "america.jpg",
      categorieId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Sport TV",
      logoUrl: "sport.jpg",
      categorieId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Paka Paka",
      logoUrl: "pakapaka.jpg",
      categorieId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Channels', null, {});
  }
};
