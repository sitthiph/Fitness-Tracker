//DB Cconfig
const uri = require("../config/keys").MongoURI;

// MongoDB connection
const db = require("mongoose");
db.connect(uri, {useNewUrlParseer: true, useCreateIndex: true})
  .then(() => console.log("MongoDB established successfully"))
  .catch(err => console.log("MongoDB established unsuccessfully"));

module.exports = db;