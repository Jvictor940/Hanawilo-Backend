const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator'); 
const jwt = require('jsonwebtoken')

const UserSchema = new Schema ({
    userName: {
        type: String,
        unique: true, 
        required: [true, 'Username is required to continue'], 
        maxLength: [15, 'Username cannot exceed 15 characters']
    }, 
    firstName: {
        type: String, 
        required: [true, 'Please provide me with your first name'] 
    }, 
    lastName: {
        type: String, 
        required: [true, 'Please provide me with your last name'] 
    }, 
    email: {
        type: String, 
        required: [true, 'Your email is required in order to proceed'], 
        unique: true,
        validate: (email) => validator.isEmail(email)
    }, 
    password: {
        type: String, 
        required: [true, 'Ypur password is required'],
        validate: (password) => validator.isStrongPassword(password)

    }, 
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true 
})

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

module.exports = mongoose.model('User', UserSchema)