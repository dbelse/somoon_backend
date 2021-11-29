const router = require('express').Router();
const test = require('../../controller/test.controller.js');

router.get('/', test.address);

module.exports = router;