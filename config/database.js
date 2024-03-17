const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;