const db = require("../models");
const userSeed = require("./user");
const departmentSeed = require("./department");

async function seedAllUp() {
  try {
    await departmentSeed.up(db.department);
    await userSeed.up(db.user);
  } catch (error) {
  } finally {
    process.exit();
  }
}

async function seedAllDown() {
  try {
    await departmentSeed.down(db.department);
    await userSeed.down(db.user);
  } catch (error) {
  } finally {
    process.exit();
  }
}

const command = process.argv[2];

if (command === "seed-up") {
  seedAllUp();
} else if (command === "seed-down") {
  seedAllDown();
} else {
  console.error(
    'Invalid command. Use "npm run seed:up" or "npm run seed:down".'
  );
}
