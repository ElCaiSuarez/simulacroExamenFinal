'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Devices', [{
      identifier: "ABC123456789",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      identifier: "DEF123456789",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      identifier: "GHI123456789",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Devices', null, {});
  }
};
