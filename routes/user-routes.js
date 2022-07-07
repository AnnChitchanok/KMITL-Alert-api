const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);

module.exports = {
  routes: router,
};
