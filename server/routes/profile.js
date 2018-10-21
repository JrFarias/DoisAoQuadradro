/* eslint-disable new-cap */
const route = require('express').Router()
const profileController = require('../controllers/profile')

route.get('/profiles', profileController.getAllProfile)
route.get('/profiles/:id', profileController.getProfileById)
route.post('/profiles', profileController.createProfile)
route.put('/profiles/:id', profileController.updateProfile)

module.exports = route