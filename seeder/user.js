"use strict";

const { hashSync } = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */

const users = [
  {
    username: "admin",
    password: "admin",
    fullName: "Admin User",
    role: "ROLE_ADMIN",
    active: true,
    departmen_id: 1,
  },
  {
    username: "manager",
    password: "manager",
    fullName: "Manager User",
    role: "ROLE_MANAGER",
    active: true,
    departmen_id: 1,
  },
  {
    username: "employee",
    password: "employee",
    fullName: "Employee User",
    role: "ROLE_EMPLOYEE",
    active: true,
  },
];

module.exports = {
  async up(db) {
    try {
      const data = [];
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        data.push({
          ...user,
          password: await hashSync(user.password.toString(), 10),
        });
      }
      await db.bulkCreate(data);
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
