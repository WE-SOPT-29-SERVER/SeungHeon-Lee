const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-e0987-firebase-adminsdk-f54d4-83c962398e.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
    firebase = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
} else {
    firebase = admin.app();
}

module.exports = {
    api: require("./api"),
}