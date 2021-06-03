const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');


//GET - Returns all appointments in the db

router.get('/', async (req, res) => {
    try {
        res.json(await appointmentController.findAllAppointments())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

// POST - Creates a new appointment in the db

router.post('/', async (req,res) => {
    try {
        const appointment = req.body;
        res.json(await appointmentController.createAppointment(appointment))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

// POST - Add a doctor to the appointment

// router.post('/join', async (req,res) => {
//     try {
//         const data = req.body
//         res.json(await appointmentController.joinAppointment(data));
//     }catch (err) {
//         return res.status(500).json({
//             message: err.message
//         })
//     }
// })

// DELETE - Eliminate an appointment

router.delete('/deleteappointment', async (req, res) => {
    try {
        const bodyData = req.body;
        res.json(await appointmentController.eliminateAppointment(bodyData))
    }catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;