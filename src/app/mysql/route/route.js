const router = require('express').Router();
const authNonRouter = require('./auth-non/index.js');

router.use('/auth-non', authNonRouter);

module.exports = router;