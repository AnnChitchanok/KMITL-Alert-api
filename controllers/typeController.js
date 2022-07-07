"use strict";

const firebase = require("../db");
const Type = require("../models/type");
const firestore = firebase.firestore();

// แสดงประเภททั้งหมด
const getTypeOptions = async (req, res, next) => {
  try {
    const types = await firestore.collection("types");
    const data = await types.get();
    const typeArray = [];

    if (data.empty) {
      res.status(404).send("No types record found");
    } else {
      data.forEach((doc) => {
        const type = new Type(doc.id, doc.data().name);
        typeArray.push(type);
      });
      res.send(typeArray);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const types = await firestore.collection("types").doc(id);
    const data = await types.get();

    if (data.empty) {
      res.status(404).send("No types record found");
    } else {
      res.send(data.data());
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getTypeOptions,
  getType,
};
