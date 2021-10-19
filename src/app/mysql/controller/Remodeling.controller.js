const db = require('../model/index.js');
const Remodeling = db.Remodeling;
const Op = db.sequelize.Op;

//Create Remodeling
exports.create = (req, res) => {
    //Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: 'Title is empty!'
        });
        return;
    }

    //Set tutorial
    const remodeling = {
        Title: req.body.title,
    };

    //Save tutorial
    Remodeling
        .create(remodeling)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create remodeling failure.'
            });
        });
};
