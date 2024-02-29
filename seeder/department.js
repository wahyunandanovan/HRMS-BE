"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(db) {
    try {
      await db.bulkCreate([
        {
          id: 1,
          departmentName: "HR",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  },

  async down(db) {
    try {
      await db.destroy({ where: {} });
    } catch (error) {
      console.error(error);
    }
  },
};
