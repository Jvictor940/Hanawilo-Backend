const User = require('../models/User')
const jwt = require('jsonwebtoken')

const protectedRoute = async(req, res, next) => {
    let token; 

    if (req.headers.authoriation && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authoriation.split(' ')[1]
    }
    // console.log(req.headers)
    if (!token) throw new Error('Not authorized to access this route')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id)
        // console.log(req.user)
        next()
    } catch (err) {
        throw new Error('Error processing the jwt token!')
    }

    next()
}

module.exports = protectedRoute;