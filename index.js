const express = require("express");
require('dotenv').config()
const app = express()
const {sequelize} = require('./models')

app.use(express.json())
// router auth
app.use('/auth',require('./router/routerAuth'))

app.listen(process.env.PORT, async () => {
    console.log(`connect ${process.env.PORT}`);
    await sequelize.authenticate()
    console.log('connect databse');
})