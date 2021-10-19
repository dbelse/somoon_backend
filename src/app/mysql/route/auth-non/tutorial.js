const router = require('express').Router();
const tutorial = require('../../controller/tutorial.controller.js');

//Create tutorial
router.post('/', tutorial.create);

//Retrieve all tutorials
router.get('/', tutorial.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorial.findAllPublished);

//Retrieve tutorial by id
router.get('/:id', tutorial.findOne);

//Update tutorial by id
router.put('/:id', tutorial.update);

//Delete tutorial by id
router.delete('/:id', tutorial.delete);

module.exports = router;