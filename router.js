const router = require('express').Router();
const userRouter = require('./routes/userRouter');
const dentistRouter = require('./routes/dentistRouter');

router.use('/user', userRouter);
router.use('/dentist', dentistRouter);

module.exports = router;
