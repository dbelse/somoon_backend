const db = require('../model/index.js');
const assign = db.assign;
const Op = db.sequelize.Op;

//Update tutorial by id
exports.update = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: {id: id} } : null;

    assign
        .update(
            req.body,
            condition
        )
        .then(resultCount => {
            if(resultCount >= 1){
                res.send({
                    message: 'assign updated.'
                });
            } else {
                res.send({
                    message: 'Cannot update assign. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Update assign failure. (id: ' + id + ')'
            });
        });

    };
// Retrieve all tutorials
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    assign.findAll({ where: condition })
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
    
    assign.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving assign with id=" + id
        });
      });
  };
