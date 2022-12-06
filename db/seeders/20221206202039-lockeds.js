'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Lockeds', [{
      deviceId: 1,
      channelId: 1,
      lockedCode: "ABC123",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      deviceId: 2,
      channelId: 3,
      lockedCode: "ABC456",
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

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
