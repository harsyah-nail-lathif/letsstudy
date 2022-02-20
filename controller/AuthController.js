const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({ error: err 
            })
        }
    })

    let user = new User ({
        name : req.body.name,
        email: req.body.email,
        password : req.body.password
    })
    user.save()
    .then(user => {
        res.json({
            message: 'User created',
        })
    })
    .catch(err => {
        res.json({
            message: 'error'
        })
    })
}

module.exports = {
    register
}