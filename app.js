const express = require('express');
const dotEnv = require('dotenv')

dotEnv.config();
const dbConnect = require('./dbConnect')
const users = require('./user')

const port = process.env.port || 7000

const app = express();

app.listen(port, () => {
    try{
        console.log(`Server started on port on http://localhost${port}`);
    }catch(error){
        res.status(404).send('Unable load')
    }
})