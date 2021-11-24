const router = require('express').Router();
const usersRouter = require('./usersRoute');
const jobsRouter = require('./jobsRoute');
const {authentication} = require('../utils');

router.use('/:param/auth', authentication.verify);
router.use('/users',usersRouter);
router.use('/jobs',jobsRouter);
module.exports = router;