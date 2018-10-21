/* eslint-disable new-cap */
const route = require('express').Router()
const paymentOrderController = require('../controllers/paymentOrder')

route.get('/payments/:id', paymentOrderController.getPaymentById)
route.get('/payments', paymentOrderController.getAllPayments)
route.post('/payments', paymentOrderController.createPayment)
route.put('/payments/:id', paymentOrderController.updatePayment)

module.exports = route