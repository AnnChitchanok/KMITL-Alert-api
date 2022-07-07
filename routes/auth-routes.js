const express = require("express");
const {
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/authController");
const { checkIfAuthenticated } = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/auth/signup", createUser);
router.delete("/auth/delete/:id", deleteUser);
router.put("/auth/update/:id", updateUser);
router.get("/auth/login", checkIfAuthenticated, async (_, res) => {
  return res.send("login successfully");
});

module.exports = {
  routes: router,
};
