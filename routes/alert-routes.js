const express = require("express");
const {
  addAlert,
  getAllAlerts,
  getAllAlertsByType,
  getAlert,
  deleteAlert,
  updateAlert,
} = require("../controllers/alertController");
const router = express.Router();

router.post("/alert", addAlert);
router.get("/alerts", getAllAlerts);
router.get("/alerts/type/:typeId", getAllAlertsByType);
router.get("/alert/:id", getAlert);
router.delete("/alert/:id", deleteAlert);
router.put("/alert/:id", updateAlert);

module.exports = {
  routes: router,
};
