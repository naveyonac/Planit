const express = require('express')
const router = express.Router()

router.use('/account', require('./acountRoutes'))


module.exports = router