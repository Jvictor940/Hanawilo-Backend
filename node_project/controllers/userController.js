const express = require('express');

const getUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'show me all the users'})
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created users with user name of 
    ${req.body.userName} with a description of ${req.body.userDescription}` })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Deleting the users" })
}

//params methods
const getUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the user with userId of: ${req.params.userId}`})
}

const putUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the user with userId of: ${req.params.userId}`})
}

const deleteUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the user with userId of: ${req.params.userId}`})
}

module.exports = {
    getUsers,
    postUser, 
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}