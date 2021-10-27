const db = require('../model/index.js');
const Remodeling = require('../model/remodeling.js')(db.sequelizeConfig, db.sequelize);
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

    //Set Remodeling
    const remodeling = {
        Title: req.body.title,
    };

    //Save Remodeling
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
