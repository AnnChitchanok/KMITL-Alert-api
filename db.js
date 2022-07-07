const firebase = require("firebase");
const config = require("./config");
const admin = require("firebase-admin");
const serviceAccount = require("./permissions.json");

//const db = firebase.initializeApp(config.firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://kmitl-alert-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin;

module.exports = db;
