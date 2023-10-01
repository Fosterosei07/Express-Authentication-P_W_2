const express = require('express');
const dotEnv = require('dotenv');
const userRoute = require('./routes/userRoutes')
const expressLayouts =require('express-ejs-layouts')
const ejs = require('ejs');

dotEnv.config();
const dbConnect = require('./dbConnect')
const users = require('./user')

const port = process.env.port || 7000


const app = express();

app.set('view engine','ejs');
app.use(expressLayouts);

app.use('/', userRoute);
app.use(express.static('public'))

app.get('/ghana', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`);
    dbConnect.authenticate()
})