"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Parents", "StudentId", {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint("Parents", {
      fields: ["StudentId"],
      type: "foreign key",
      name: "student_fk",
      references: {
        table: "Students",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Parents", "student_fk");
    await queryInterface.removeColumn("Parents", "StudentId");
  },
};
