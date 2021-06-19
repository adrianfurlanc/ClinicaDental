const router = require('express').Router();
const userController = require('../controllers/userController');
const adminUser = require("../middlewares/adminUser");
const adminDentist = require("../middlewares/adminDentist");
const User = require('../models/user');


// GET - Return all users
router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST - Creates a new user
router.post('/', async (req,res) => {
    // const emailExist = await User.findOne({email: req.body.email});
    // if(emailExist) return res.status(400).send("Email already exists");

    try {
        const user = req.body;
        console.log("soy user", user)
        res.json(await userController.createUser(user))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

// POST - Login a user
router.post('/login', async (req,res) => {
    try {
        const {email,password} = req.body;
        const jwt = await userController.logMe(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user});
    }catch (err) {
        return res.status(401).json({
            message: err.message
        })
    }
})

//UPDATE - modifies users address and phone number

router.put('/modify', adminUser, async (req,res) => {
    try {
        const data = req.body;
        res.json(await userController.modifyUser(data));
    } catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }   
});

router.delete('/delete', adminUser, async (req,res) => {
    try {
        const id = req.body.id
        res.json(await userController.deleteUser(id))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;
