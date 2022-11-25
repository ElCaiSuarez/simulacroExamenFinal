'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      name: "local",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "sports",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "cartoons",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
