'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus388',
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'airbus389',
        capacity: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete(
      'Airplanes',
      {
        [Op.or]: [
          { modelNumber: 'airbus388' },
          { modelNumber: 'airbus389' }
        ]
      }
    );
  }
};
