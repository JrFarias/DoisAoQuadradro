const Profile = require('../models/profile')

const getAllProfile = async (req, res, next) => {
  try {
    const response = await Profile.find()
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const getProfileById = async (req, res, next) => {
  try {
    const response = await Profile.findById(req.params.id)
    res.json(response)
  } catch (error) {
    next(error)
  }
}

const createProfile = async (req, res, next) => {
  try {
    const newProfile = await Profile.create(req.body)
    res.json(newProfile)
  } catch (error) {
    next(error)
  }
}

const updateProfile = async (req, res, next) => {
  try {
    const response = await Profile.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    )
    
    res.json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllProfile,
  getProfileById,
  createProfile,
  updateProfile
}