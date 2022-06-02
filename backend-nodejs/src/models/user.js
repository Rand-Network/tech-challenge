const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, 
        required:true,
        trim: true,
        lowercase: true 
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    kyc: {
        type: String,
        trim: true
    }
});

const User = mongoose.model('User', userSchema)


module.exports = User