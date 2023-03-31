const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryName: {
        type: String, 
        required: [true, 'Category name is required'], 
        unique: [true, 'Category name already in use, pick another dope name!'], //This just gives a duplicate key error so the message doesn't show. 
        maxLength: [25, 'Category name cannot have more than 25 letters']
    }, 
    // categoryName: {
    //     type: [String, 'Category name must contain letters'], 
    //     required: [true, 'Category name is required'], 
    //     unique: [true, 'Category name already in use. Pick another dope name'], 
    //     maxLength: [5, 'Category name cannot have more than 25 letters']
    // }, 
    gender: {
        type: String, 
        required: [true, 'Gender is required'], 
        enum: [
            'Male', 
            'Female',
            'male',
            'female'
        ]
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Category', CategorySchema)