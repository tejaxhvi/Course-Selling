const jwt = require("jsonwebtoken")
const { JWT_SECRET_ADMIN } = require("../config")

function AdminMiddleware(req, res ,next) {
    const token = req.headers.token;

    const Decoded = jwt.verify( token , JWT_SECRET_ADMIN)
    
    if(Decoded){
        req.userId = Decoded.id
        next()
    }else{
        res.status(403).json({
            message : "You are not Signed-in"
        })
    }
}

module.exports = ({
    AdminMiddleware : AdminMiddleware
})