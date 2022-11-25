'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Devices', [
      {//Device habilitado
      identifier: "ABC123456789",
      enabledAt: new Date(),
      disabledAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {//Device habilitado
      identifier: "DEF123456789",
      enabledAt: new Date(),
      disabledAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {//Device desabilitado
      identifier: "GHI123456789",
      enabledAt: null,
      disabledAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Devices', null, {});
  }
};
