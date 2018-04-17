'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      source: {
        type: Sequelize.TEXT
      },
      external: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      search_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Search,
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('answers');
  }
};
