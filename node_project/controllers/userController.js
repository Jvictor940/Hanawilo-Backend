const User = require('../models/User');

const getUsers = async (req, res, next) => {
    const filter = {};
    const options = {};
    if (Object.keys(req.query).length){
        const {
            userName,
            gender,
            sortByUserName, 
            limit
        } = req.query

        if(userName) filter.userName = true
        if(gender) filter.gender = true

        if (limit) options.limit = limit;
        if (sortByUserName) options.sortByUserName = {
            user: sortByUserName
        }
    }

    try {
        const users = await User.find()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }
}

const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json()
    } catch (err) {
        next(err)
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const deletedUsers = await User.deleteMany()
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUsers)
    } catch (err) {
        next(err)
    }
}

//params methods
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}

const putUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUser)
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUsers = await User.findByIdAndDelete(req.params.userId)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUsers)
    } catch (err) {
        
    }
}

module.exports = {
    getUsers,
    postUser, 
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}