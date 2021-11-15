const router = require('express').Router();
const assign = require('../../controller/assign.controller.js');

/*
//Create tutorial
router.post('/', tutorial.create);

//Retrieve all tutorials
router.get('/', tutorial.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorial.findAllPublished);

//Retrieve tutorial by id
router.get('/:id', tutorial.findOne);

//Delete tutorial by id
router.delete('/:id', tutorial.delete);
*/

//Update tutorial by id
router.put('/:id', assign.update);
router.get('/:id', assign.findOne);
router.get('/', assign.findAll);


module.exports = router;