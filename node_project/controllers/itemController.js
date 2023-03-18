const express = require('express');

const getItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({message: 'show me all the items'})
}

const postItem = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created item with item name of: ${req.body.itemName} 
    and item description of: ${req.body.itemDescription}` })
}

const deleteItems = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "Deleting the items" })
}

module.exports = {
    getItems,
    postItem, 
    deleteItems
}