
const router = require('express').Router();
const dentistController = require('../controllers/dentistController');
const adminUser = require("../middlewares/adminUser");
const adminDentist = require("../middlewares/adminDentist");

// GET - List all available dentists
router.get('/', adminUser, async (req,res) => {
    try {
        res.json(await dentistController.listAllDentists())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

//POST - Hires a new dentist
router.post('/hire', async (req,res) => {
    try {
        const dentist = req.body;
        res.json(await dentistController.hireDentist(dentist))
    }catch (err) {
        return res.status(403).json({
            message: err.message
        })
    }
})

// POST - Login a dentist
router.post('/login', async (req,res) => {
    try {
        const {email,password} = req.body;
        const jwt = await dentistController.logMe(email,password);
        const token = jwt.token;
        const dentist = jwt.dentist;
        res.json({token,dentist});
    }catch (err) {
        return res.status(401).json({
            message: err.message
        })
    }
})

// GET - List a dentist with a specific specialty
router.get('/specialty', async (req, res) => {
    try {
        const specialty = req.body.specialty;
        res.json(await dentistController.findDentistBySpecialty(specialty));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


// DELETE - Fires a dentist
router.delete('/', adminDentist, async (req, res) => {
    try{
        const id = req.body.id;
        res.json(await dentistController.fireDentist(id));
    }catch (err){
        return res.status(403).json({
            message: err.message
        })
    }
})

module.exports = router;
