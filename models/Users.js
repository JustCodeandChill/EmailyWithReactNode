const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleID : String
})

//tell mongoose to create a new collection named 'users'
mongoose.model('users', userSchema);