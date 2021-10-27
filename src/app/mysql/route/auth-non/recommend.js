const router = require('express').Router();
const recommend = require('../../controller/recommend.controller.js');

//Create tutorial
router.post('/', recommend.create);

//Retrieve all tutorials
router.get('/', recommend.findAll);

//Retrieve display true recommend
router.get('/display', recommend.findAllDisplay)

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