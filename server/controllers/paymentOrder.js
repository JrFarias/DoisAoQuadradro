const PaymentOrder = require('../models/paymentOrder')

const createPayment = async (req, res, next) => {
  try {
    const newPayment = await PaymentOrder.create(req.body)
    res.json(newPayment)
  } catch (error) {
    next(error)
  }
}

const updatePayment = async (req, res, next) => {
  try {
    const newPayment = await PaymentOrder.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body }},
      { new: true }
    )
    res.json(newPayment)
  } catch (error) {
    next(error)
  }
}

const getPaymentById = async (req, res, next) => {
  try {
    const newPayment = await PaymentOrder.findById(req.params.id)
    res.json(newPayment)
  } catch (error) {
    next(error)
  }
}

const getAllPayments = async (req, res, next) => {
  try {
    const response = await PaymentOrder.find()
    res.json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createPayment,
  updatePayment,
  getPaymentById,
  getAllPayments
}