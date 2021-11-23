const router = require('express').Router();
const remodeling = require('../../controller/remodeling.controller.js');

//Create tutorial
//router.post('/', remodeling.create);
router.get('/', remodeling.findAll);
router.get('/:id', remodeling.findAll);
router.get('/company/:id', remodeling.findByCompany);

module.exports = router;