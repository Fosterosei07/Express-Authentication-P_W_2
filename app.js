const express = require('express');
const dotEnv = require('dotenv')
// const sequelize = require('sequelize')

dotEnv.config();
const dbConnect = require('./dbConnect')
const users = require('./user')

const port = process.env.port || 7000


const app = express();

app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
})