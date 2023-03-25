const Category = require('../models/Category');
// Root Methods 
//  For '/category' endpoints

const getCategories = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length){
        const category = req.query.category //pagination
        console.log(`Searching for category: ${category}`)
    }

    try {
        const categories = await Category.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(categories)
    } catch (err) {
        next(err)
        
    }

}

const createCategory = async (req, res, next) => {
    try {
        const category = await Category.create(req.body)


        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(category)
    } catch (err) {
        next(err)
    }

}

const deleteCategories = async (req, res, next) => {
    try {
        const deleteCategories = await Category.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deleteCategories) //
    } catch (err) {
        next(err)
    }

}

//Param Methods 
// For 'category/:categoryId'
const getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.categoryId)

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(category)
    } catch (err) {
        next(err)
        
    }

}

const putCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true})
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(category)
    } catch (error) {
        next(err)
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const deletedCategories = await Category.findByIdAndDelete(req.params.categoryId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedCategories)
    } catch (err) {
        next(err)
        
    }
}

module.exports = {
    getCategories,
    createCategory, 
    deleteCategories,
    getCategory,
    putCategory, 
    deleteCategory
}