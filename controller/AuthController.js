const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({ error: err 
            })
        }
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
    })
}
const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    User.findOne({$or: [{email: username}, {name: username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if (err){
                    res.json({error: err
                    })
                }
                if (result){
                    let toket  = jwt.sign ({name : user.name}, 'verySecretValue', {expiresIn : '1h'} )
                    res.json ({
                        message : 'Login success',
                        token
                    })
                } else {
                    res.json ({
                        message : 'Wrong password'
                    })
                }
            })

        }else {
            res.json({
                message: 'User not found'
            })
        }
    })
}

module.exports = {
    register,login
}