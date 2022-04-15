const { Router } = require("express");
const route = Router()
const { sequelize, User } = require('../models')

route.get('/', async (req, res) => {
    const user = await User.findAll()
    res.send(user)
})

route.post('/create', async (req, res) => {
    const { firstName, lastName } = req.body
    await User.create({ firstName, lastName })
    res.send('creado')
})

module.exports = route