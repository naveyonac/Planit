const mongoose = require('./../models/userModel')

const user = mongoose.model('userModel')

module.exports = {
    create: (req, res) => {
        user.create({
            username: req.body.username,
            password: req.body.password
        }).then(newUser => {
            console.log("created new user " + newUser)
        }).then(res.json("success, new account created"))
    },
    index: (req,res) => {
        res.send('Fuck off')
    }
}