const axios = require('axios')
const url = require('../enviroments')
const PaymentOrder = require('../models/paymentOrder')
const blueBird = require('bluebird')
/* eslint-disable */
const createTransaction = async (req, res, next) => {
  try {

    const paymentOrderId = req.body.paymentOrderId
    const findPayment = await PaymentOrder.findById(paymentOrderId)

    const associationUsers = findPayment.associationUsers.map((user) => {

      const transaction =  {
        amount: findPayment.amount / findPayment.associationUsers.length,
        card_id: user.card_id,
        payment_method: 'credit_card'
      }

      return axios.post(url('transactions'), transaction)
        .then(response => Promise.resolve(response))

    })

    const promiseTransactions = await Promise.all(associationUsers)
    const transactionsData = promiseTransactions.map(transaction => transaction.data)

    const transactionsUsers = await transactionsData.map(transaction => {
      let newUser = null
      findPayment.associationUsers.forEach(user => {
        if(transaction.card.id === user.card_id) {
          newUser = user
          newUser.paymentState = transaction.status
          newUser.tid = transaction.tid
        }
      })
      return newUser
    })
     const updatePayment = await PaymentOrder.findByIdAndUpdate(
      paymentOrderId,
      { $set: { associationUsers: transactionsUsers }},
      { new: true }
    )
      res.json(updatePayment)
    } catch (error) {
    next(error)
  }
}

module.exports = createTransaction;
