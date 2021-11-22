const router = require('express').Router();
const remodeling = require('../../controller/remodeling.controller.js');

//Create tutorial
//router.post('/', remodeling.create);
router.get('/', remodeling.findAll);

module.exports = router;