const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.create)
router.get('/', userController.index)


module.exports = router