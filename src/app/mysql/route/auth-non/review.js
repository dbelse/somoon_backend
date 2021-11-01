const router = require('express').Router();
const review = require('../../controller/review.controller.js');

//Create tutorial
//router.post('/', review.create);

//Retrieve all tutorials
router.get('/', review.findAll);

/*
// Retrieve all published Tutorials
router.get("/published", tutorial.findAllPublished);

//Retrieve tutorial by id
router.get('/:id', tutorial.findOne);

//Update tutorial by id
router.put('/:id', tutorial.update);

//Delete tutorial by id
router.delete('/:id', tutorial.delete);

*/
module.exports = router;