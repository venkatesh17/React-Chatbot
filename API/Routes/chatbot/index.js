const express = require('express')
const router = express.Router()


const getData = require('./getLogin')
const getProfile = require('./getProfile')

router.get("/getlogin", getData)
router.get('/getprofile', getProfile)

module.exports =router

