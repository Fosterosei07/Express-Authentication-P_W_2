const express = require('express');
const {contact} = require('../controller/userController');
const app = express.Router();

app.get('/',contact)

module.exports = app