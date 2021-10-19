const Router = require('express').Router;
const authNonRouter = require('./auth-non/index.js');

const router = Router();
router.use('/auth-non', authNonRouter);

module.exports = router;