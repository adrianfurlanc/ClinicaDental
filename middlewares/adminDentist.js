const jwt = require('jsonwebtoken');
const secret = "Esta clinica apesta";

const adminDentist = (req, res, next) => {

    try {
        if(!req.headers.authorization){
            // return new Error("No tienes autorización");
           throw new Error("You are not a dentist!");
        }

        let token = req.headers.authorization.split(' ')[1];
        let auth = jwt.verify(token,secret);
        console.log(auth.isDentist);    
        if(auth.isDentist == false){
            throw new Error("You are not allowed to make that action!");
        }
        return next();
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = adminDentist;