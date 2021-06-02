const jwt = require('jsonwebtoken');
const secreta = "esto es lo más fácil";


const auth =  async (req, res, next) => {
    try{
        const auth = req.headers.authorization;
        const token = auth.split(' ')[1]
        const payload = jwt.verify(token,secreta)
        if(!payload){
            throw new Error('Cannot be verified')
        }
        const userId = req.params.id
        if (userId != payload.userId){
            throw new Error('User cannot be verified')
        }
        next()
    }catch(err){
        res.status(500)
        .json({
            message: err.message
        })
    }
}

module.exports = auth;