const db = require('../model/index.js');
const Tutorial = db.tutorial;
const Op = db.sequelize.Op;

//Create tutorial
exports.create = (req, res) => {
    //Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: 'Title is empty!'
        });
        return;
    }

    //Set tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    //Save tutorial
    Tutorial
        .create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create tutorial failure.'
            });
        });
};

// Retrieve all tutorials
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Tutorial.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tutorial.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

//Update tutorial by id
exports.update = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: {id: id} } : null;

    Tutorial
        .update(
            req.body,
            condition
        )
        .then(resultCount => {
            if(resultCount >= 1){
                res.send({
                    message: 'Tutorial updated.'
                });
            } else {
                res.send({
                    message: 'Cannot update tutorial. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Update tutorial failure. (id: ' + id + ')'
            });
        });
};

//Delete tutorial by id
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };



exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };