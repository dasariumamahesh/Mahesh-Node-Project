const express = require('express')
const router = express.Router()
const requestHelper = require('../../helper/requestHelper')

router.get('/randomjoke', requestHelper.getJoke)

module.exports = router;