const express = require("express");
const { getTypeOptions, getType } = require("../controllers/typeController");
const router = express.Router();

router.get("/types", getTypeOptions);
router.get("/type/:id", getType);

module.exports = {
  routes: router,
};
