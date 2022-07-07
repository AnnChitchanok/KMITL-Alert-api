"use strict";

const firebase = require("../db");
const Alert = require("../models/alert");
const fetch = require("node-fetch");
const firestore = firebase.firestore();

// เพิ่มเหตุการณ์
const addAlert = async (req, res, next) => {
  try {
    const data = req.body;
    const aid = await firebase.database().ref().child("alerts").push().key;
    data.id = aid;
    const alert = await firebase
      .database()
      .ref("alerts/" + aid)
      .set(data, (err) => {
        if (err) {
          res
            .status(503)
            .send({ status: 1, message: "Messages not available!" });
        } else {
          res.status(200).send(data);
        }
      });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// แสดงเหตุการณ์ทั้งหมด
const getAllAlerts = async (req, res, next) => {
  try {
    const alerts = await firebase.database().ref("alerts");

    const alertArray = [];

    alerts.on("value", (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.val();

        alertArray.push(data);
      });
      res.send(alertArray);
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// แสดงเหตุการณ์ทั้งหมด ด้วย params.typeId
const getAllAlertsByType = async (req, res, next) => {
  try {
    const typeId = req.params.typeId;
    const alerts = await firebase.database().ref("alerts");
    const alertArray = [];

    alerts.on("value", (snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.val();

        if (data.typeId == typeId) {
          alertArray.push(data);
        }
      });
      res.send(alertArray);
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// แสดงเหตุการณ์จากการส่งค่าด้วย params.id
const getAlert = async (req, res, next) => {
  try {
    const id = req.params.id;
    const alert = await firebase.database().ref("alerts/" + id);
    alert.on("value", (data) => {
      if (!data.exists) {
        res.status(404).send("No alert record found");
      } else {
        res.send(data);
      }
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// แก้ไขเหตุการณ์ ด้วย params.id
const updateAlert = async (req, res, next) => {
  try {
    const id = req.params.id;
    const alert = await firebase
      .database()
      .ref()
      .child("/alerts/" + id);
    alert.update(data);
    res.send("Record updated successfuly");
  } catch (err) {
    res.send(err.message);
  }
};

// ลบเหตุการณ์ ด้่วย params.id
const deleteAlert = async (req, res, next) => {
  try {
    const id = req.params.id;
    const alert = await firebase.database().ref("alerts").child(id).remove();
    res.send("Record deleted successfuly");
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  addAlert,
  getAllAlerts,
  getAlert,
  updateAlert,
  deleteAlert,
  getAllAlertsByType,
};
