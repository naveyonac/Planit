const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    local: {
        username: String,
        password: String
    }
})

// mongoose.model('userModel', User)


module.exports = mongoose.model('userModel', User)