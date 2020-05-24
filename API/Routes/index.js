const express = require('express');
const router = express.Router()

const chatbot = require('./chatbot')

router.use('/chatbot', chatbot)


module.exports = router