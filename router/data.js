const express = require('express')
const router = express.Router()
const formController = require('../controllers/data')

router.post('/post',userauthentication.authenticate,formController.postData)
module.exports = router