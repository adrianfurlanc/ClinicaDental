const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const adminDentist = require("../middlewares/adminDentist");
const adminUser = require("../middlewares/adminUser");

//GET - Returns all appointments in the db

router.get('/',  async (req, res) => {
    try {
        res.json(await appointmentController.findAllAppointments())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// GET - Gets all appointments from one user

router.get('/myappointments', adminUser, async (req, res) => {
    try {
        const data = req.body;
        res.json(await appointmentController.findAppointmentsByUser(data))
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Creates a new appointment in the db

router.post('/', adminUser, async (req,res) => {
    try {
        const appointment = req.body;
        res.json(await appointmentController.createAppointment(appointment))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

// POST - Request the pending appointments 

router.post('/pending', adminDentist, async (req,res) => {
    try{
        res.json(await appointmentController.findActiveAppointments())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// POST - Request the past appointments 

router.post('/past', adminDentist, async (req,res) => {
    try{
        res.json(await appointmentController.findNoActiveAppointments())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

// UPDATE - Modify appointment isActive status

router.put('/modifyapp', adminUser, async (req,res) => {
    try {
        const data = req.body;
        res.json(await appointmentController.modifyAppointment(data))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

// DELETE - Eliminate an appointment

router.delete('/deleteappointment', adminUser, async (req, res) => {
    try {
        const bodyData = req.body;
        console.log(bodyData);
        res.json(await appointmentController.eliminateAppointment(bodyData))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;