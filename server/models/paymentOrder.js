const mongoose = require('mongoose')
const db = require('../db')

const { Schema } = mongoose

const userPaymentSchema = new Schema({
  userId: {
    required: [
      true,
      'Entre com o id do usuario'
    ],
    type: String
  },
  /* eslint-disable */
  card_id: {
    required: [
      true,
      'Entre com o id do cartão'
    ],
    type: String
  },
  paymentState: {
    required: [
      true,
      'entre com o estado do pagamento'
    ],
    enum: [
      'processing',
      'authorized',
      'paid',
      'refunded',
      'waiting_payment',
      'pending_refund',
      'refused'
    ],
    type: String
  },
  tid: {
    type: Number
  }
}, { versionKey: false })

const paymentOrderSchema = new Schema({
  amount: {
    required: [
      true,
      'Entre com o valor da fatura'
    ],
    type: Number
  },
  agency:  {
    required: [
      true,
      'Entre com a agencia do dono do imovel'
    ],
    type: String
  },
  account: {
    required: [
      true,
      'Entre com a conta corrente'
    ],
    type: String
  },
  associationUsers: [userPaymentSchema],
  paymentDate: {
    required: [
      true,
      'Entre com o vencimento do pagamento'
    ],
    type: Schema.Types.Date
  },
  description: {
    required: [
      true,
      'Entre com a descrição da fatura'
    ],
    type: String
  }
}, 
{ versionKey: false })

module.exports = db.model('payments', paymentOrderSchema);