const Router = require('express').Router;
const RemodelingRouter = require('./remodeling');
const tutorialRouter = require('./tutorial');
const recommendRouter = require('./recommend');
const reviewRouter = require('./review');
const companyRouter = require('./company');

const router = Router();
router.use("/remodeling", RemodelingRouter);
router.use("/tutorial", tutorialRouter);
router.use("/recommend", recommendRouter);
router.use("/review", reviewRouter);
router.use("/company", companyRouter);

module.exports = router;