'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Unlockeds', [{
      deviceId: 1,
      channelId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 1,
      channelId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 2,
      channelId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 2,
      channelId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
