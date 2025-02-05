const jwt = require('jsonwebtoken');
require('dotenv').config()

const jwtSecret = process.env.jwtSecret;


function authmiddleware(req,res,next){
 
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "Authorization header missing" });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Token missing in authorization header" });
    }
    
    try {
        // Decode the token without verifying (to access payload)
        const payload = jwt.decode(token);

        if (!payload) {
            return res.status(400).json({ msg: "Invalid token format" });
        }

        // Optionally log the decoded payload
        // console.log("Decoded payload:", payload);
        req.user= payload;
        // Verify the token's signature
        const verified = jwt.verify(token, jwtSecret);

        if (verified) {
            // Attach the payload to the request object
            next();
        } else {
            return res.status(401).json({ msg: "Token verification failed" });
        }
    } catch (error) {
        console.error("JWT verification error:", error.message);
        return res.status(403).json({ msg: "Unauthorized user" });
    }
}

module.exports = {
    authmiddleware
}