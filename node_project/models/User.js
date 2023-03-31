const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator'); 

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

    }
}, {
    timestamps: true 
})

module.exports = mongoose.model('User', UserSchema)