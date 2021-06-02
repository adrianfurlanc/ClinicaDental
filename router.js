const router = require('express').Router();
const userRouter = require('./routes/userRouter');

router.use('/user', userRouter);

module.exports = router;
