const express = require('express');
const router = express.Router();
const {
    getUsers, 
    postUser, 
    deleteUsers,
    getUser,
    putUser,
    deleteUser, 
    login, 
    forgotPassword,
    resetPassword,
    updatePassword,
    logout
} = require('../controllers/userController')
const adminValidator = require('../middlewares/utils/validators');
const protectedRoute = require('../middlewares/auth')

router.route('/')
.get(adminValidator, protectedRoute, getUsers)
.post(postUser)
.delete(protectedRoute, deleteUsers)

router.route('/login')
.post(login)

router.route('/forgotPassword')
.post(forgotPassword)

router.route('/resetPassword')
.post(resetPassword)

router.route('/updatePassword')
.post(protectedRoute, updatePassword)

router.route('/logout')
.post(protectedRoute, logout)

router.route('/:userId')
.get(protectedRoute, getUser)
.put(protectedRoute, putUser)
.delete(protectedRoute, deleteUser)

module.exports = router;