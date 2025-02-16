const admin = require("firebase-admin");

const serviceAccount = require("./Sec.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports=admin;



  