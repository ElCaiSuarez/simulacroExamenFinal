'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Favorites', [{
      deviceId: 0,
      channelId: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 0,
      channelId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 1,
      channelId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};
