/* eslint-disable new-cap */
const route = require('express').Router()
const createTransaction = require('../controllers/transaction')

route.post('/transactions', createTransaction)

module.exports = route