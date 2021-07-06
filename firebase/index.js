const admin = require("firebase-admin");

const serviceAccount = require("../config/fbServiceAccountKey");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
