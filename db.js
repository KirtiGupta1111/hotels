const mongoose = require("mongoose");

//connnection

const mongoURL = 'mongodb://localhost:27017/hotels'

//setUp mongoDb Connection'
mongoose.connect(mongoURL, {
  useNewUrlParser : true,
  useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', () => {
  console.log("Connected to MongoDb Server...");
});

db.on('error', (err) => {
  console.log("MongoDb Connection error",err);
});

db.on('disconnected', () => {
  console.log("Mongo Disconnected");
});


module.exports = db;





