"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          name: "John Doe",
          date_of_birth: "1990-10-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barrack Obama",
          date_of_birth: "2000-12-4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Michael Jackson",
          date_of_birth: "1889-08-19",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Students", null, {});
  },
};
