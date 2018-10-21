const blueBird = require('bluebird')
const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost/hackthon5andar',
  { useNewUrlParser: true }
)

mongoose.Promise = blueBird
/* eslint-disable */
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('dataBase running')
});

module.exports = db

