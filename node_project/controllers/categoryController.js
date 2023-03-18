// Root Methods 
//  For '/category' endpoints

const getCategories = (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length){
        const category = req.query.category //pagination
        console.log(`Searching for category: ${category}`)
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You hit me! Show me all the categories!" })
}

const createCategory = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created category with category name of 
    ${req.body.categoryName} and gender ${req.body.gender}` })
}

const deleteCategories = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Deleting the categories" })
}

//Param Methods 
// For 'category/:categoryId'
const getCategory = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the category with categoryId of: ${req.params.categoryId}`})
}

const putCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the category with categoryId of: ${req.params.categoryId}` })
}

const deleteCategory = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the category with categoryId of: ${req.params.categoryId}`})
}

module.exports = {
    getCategories,
    createCategory, 
    deleteCategories,
    getCategory,
    putCategory, 
    deleteCategory
}