const db = require('../model/index.js');
const Recommend= require('../model/recommend.js')(db.sequelizeConfig, db.sequelize);
const Op = db.sequelize.Op;

//Create recommend
exports.create = (req, res) => {
    //Validate request
    if(!req.body.title) {
        res.status(400).send({
            message: 'title is empty!'
        });
        return;
    }
    if(!req.body.url) {
        res.status(400).send({
            message: 'url is empty!'
        });
        return;
    }
    if(!req.body.img_path) {
        res.status(400).send({
            message: 'img_path is empty!'
        });
        return;
    }

    //Set Recommend
    const recommend = {
        title: req.body.title,
        url: req.body.path,
        img_path: req.body.img_path
    };

    //Save recommend
    Recommend
        .create(recommend)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create recommend failure.'
            });
        });
};

// Retrieve all recommend's column
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Recommend.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving recommends."
        });
      });
  };

  exports.findAllDisplay = (req, res) => {
    Recommend.findAll({ where: { display: true } })
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
