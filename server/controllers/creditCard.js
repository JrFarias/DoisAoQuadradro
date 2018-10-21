const Profile = require('../models/profile')
const axios = require('axios')
const url = require('../enviroments')

/* eslint-disable */
const getCardId = async (req, res, next) => {
  try {
    const userId = req.body.userId
    const creditCard = req.body
    delete userId

    const cardId = await axios.post(url('cards'), creditCard)
    const setCardId = await Profile.findByIdAndUpdate(
      userId, 
      { $set: { paymentCardId: cardId.data.id }}, 
      { new: true}
    )
    res.json(setCardId)
  } catch (error) {
    next(error)
  }
}

module.exports = getCardId;