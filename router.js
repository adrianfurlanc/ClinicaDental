const router = require('express').Router();
const userRouter = require('./routes/userRouter');
const dentistRouter = require('./routes/dentistRouter');
const appointmentRouter = require('./routes/appointmentRouter');

router.use('/user', userRouter);
router.use('/dentist', dentistRouter);
router.use('/appointment', appointmentRouter); 

module.exports = router;
