'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
      [
        {
          name: 'El Rodrigon',
          username: 'rods27',
          email: 'rods27@gmail.com',
          password: '50505050',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          username: 'admin123',
          email: 'admin@admin.com',
          password: 'administrator',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
