const express = require('express');
const router = express.Router();
const {
    getItems,
    postItem, 
    deleteItems
} = require('../controllers/itemController')

router.route('/')
.get(getItems)
.post(postItem)
.delete(deleteItems)

module.exports = router; 