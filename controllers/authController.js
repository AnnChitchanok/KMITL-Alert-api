const firebase = require("../db");
const firestore = firebase.firestore();

const createUser = async (req, res) => {
  const { email, password, displayName } = req.body;

  const createAuth = await firebase.auth().createUser({
    email,
    password,
    displayName,
  });

  try {
    const users = await firestore
      .collection("users")
      .doc(createAuth.uid)
      .set(req.body);
    return res.send("created successfuly");
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const authUser = firebase.auth().deleteUser(id);

    const users = await firestore.collection("users").doc(id).delete(req.body);
    res.send("Record deleted successfuly");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const authUser = firebase.auth().updateUser(id, req.body);

    //const users = await firestore.collection("users").doc(id).update(req.body);
    res.send("Record deleted successfuly");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { createUser, deleteUser, updateUser };
