const router = require('express').Router();
const Remodeling = require('../../controller/Remodeling.controller.js');

//Create tutorial
router.post('/', Remodeling.create);

module.exports = router;