const express = require('express')
const router = express.Router()

router.use('/account', require('./acountRoutes'))
router.use('/user', require('./userRoutes'))


module.exports = router