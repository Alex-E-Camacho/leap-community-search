'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Searches', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      serviceAreaCategory: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      searchText: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      categorization: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Searches')
  }
};
