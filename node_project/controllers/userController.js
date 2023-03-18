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
    ${req.body.itemName} with a description of ${req.body.itemDescription}` })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Deleting the users" })
}

module.exports = {
    getUsers,
    postUser, 
    deleteUsers
}