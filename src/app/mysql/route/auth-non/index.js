const Router = require('express').Router;
const RemodelingRouter = require('./Remodeling');
const tutorialRouter = require('./tutorial');

const router = Router();
router.use("/Remodeling", RemodelingRouter);
router.use("/tutorial", tutorialRouter);

module.exports = router;