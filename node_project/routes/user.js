const express = require('express');
const router = express.Router();
const {
    getUsers, 
    postUser, 
    deleteUsers,
    getUser,
    putUser,
    deleteUser
} = require('../controllers/userController')
const adminValidator = require('../middlewares/utils/validators');
const protectedRoute = require('../middlewares/auth')

router.route('/')
.get(adminValidator, protectedRoute, getUsers)
.post(postUser)
.delete(protectedRoute, deleteUsers)

router.route('/:userId')
.get(protectedRoute, getUser)
.put(protectedRoute, putUser)
.delete(protectedRoute, deleteUser)

module.exports = router;