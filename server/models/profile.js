const mongoose = require('mongoose')
const db = require('../db')

const { Schema } = mongoose

const profileSchema = new Schema({
  documentId: {
    required: [
      true,
      'Entre com o documento'
    ],
    type: String
  },
  email: {
    required: [
      true,
      'Entre com o email do usuario'
    ],
    type: String
  },
  name: {
    required: [
    true,
    'Entre com o nome do usuario'
  ],
    type: String
  },
  paymentCardId: {
    type: String
  }
}, {
  versionKey: false
})

module.exports = db.model('profiles', profileSchema);