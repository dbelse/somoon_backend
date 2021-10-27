const Router = require('express').Router;
const RemodelingRouter = require('./Remodeling');
const tutorialRouter = require('./tutorial');
const recommendRouter = require('./recommend');

const router = Router();
router.use("/Remodeling", RemodelingRouter);
router.use("/tutorial", tutorialRouter);
router.use("/recommend", recommendRouter);

module.exports = router;