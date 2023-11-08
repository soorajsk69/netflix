const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/netflix')

const User = mongoose.model('User',{
    id:String,
    email:String,
    password:Number
})

module.exports={
    User
}
