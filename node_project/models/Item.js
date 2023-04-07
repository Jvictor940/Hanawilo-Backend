const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const RatingSchema = new Schema({
    rating: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: [true, 'Please rate the item']
    }, 
    text: {
        type: String, 
        maxLength: [500, 'Cannot be more than 500 characters'],
        required: true
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const ItemSchema = new Schema({
    itemName: {
        type: String, 
        required: [true, 'An item name is required'], 
        maxLength: [100, 'Item name cannot exceed 100 characters']
    },
    gender: {
        type: String, 
        required: [true, 'Gender is required'], 
        enum: [
            'Male',
            'Female',
            'male',
            'female'
        ]
    }, 
    price: {
        type: Number,
        required: true, 
        min: 0
    }, 
    isClearance: {
        type: Boolean, 
        default: false
    }, 
    colors: {
        type: [String],
        required: true
    }, 
    sizes: {
        type: [String], 
        required: true
    }, 
    ratings: [RatingSchema], 
    image: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', ItemSchema)