'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('mods', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sexy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      chest: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      waist: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shoe: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eyes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hair: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      skin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      experience: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('mods');
  }
};
