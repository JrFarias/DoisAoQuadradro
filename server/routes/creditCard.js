/* eslint-disable new-cap */
const route = require('express').Router()
const getCardId = require('../controllers/creditCard')

route.post('/credit-card', getCardId)

module.exports = route