const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/chinnaproject`)

const usersSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    profilepic:{
        type: String,
        default: "pfppp.webp"
    },
    posts: [{type: mongoose.Schema.Types.ObjectId,  ref: 'post'}],
})

module.exports = mongoose.model('user', usersSchema)
