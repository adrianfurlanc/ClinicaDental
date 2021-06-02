
const router = require('express').Router();
const dentistController = require('../controllers/dentistController');



//POST - Hires a new dentist
router.post('/', async (req,res) => {
    try {
        const dentist = req.body;
        res.json(await dentistController.hireDentist(dentist))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

// GET - List all available dentists
router.get('/', async (req,res) => {
    try {
        res.json(await dentistController.listAllDentists())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})


// DELETE - Fires a new dentist
router.delete('/', async (req, res) => {
    try{
        const id = req.body.id;
        res.json(await dentistController.fireDentist(id));
    }catch (err){
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;
