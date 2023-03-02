const express = require('express')
const router = express.Router()
const delController = require('../controllers/delData')

router.delete('/delData/:expenseid', userauthentication.authenticate, delController.delData)
module.exports = router