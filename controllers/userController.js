"use strict";

const firebase = require("../db");
const User = require("../models/user");
const firestore = firebase.firestore();

const getUsers = async (req, res, next) => {
  try {
    const users = await firestore.collection("users");
    const data = await users.get();
    const dataArray = [];

    if (data.empty) {
      res.status(404).send("No types record found");
    } else {
      data.forEach((doc) => {
        const user = new User(
          doc.id,
          doc.data().createdAt,
          doc.data().displayName,
          doc.data().email,
          doc.data().avatar,
          doc.data().status
        );
        dataArray.push(user);
      });
      res.send(dataArray);
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const users = await firestore.collection("users").doc(id);
    const data = await users.get();
    res.send(data.data());
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const users = await firestore.collection("users").doc(id).update(req.body);
    res.send("Record saved successfuly");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
};
