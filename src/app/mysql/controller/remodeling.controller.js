const db = require('../model/index.js');
const remodeling = db.remodeling;
const Op = db.sequelize.Op;

// 관계있는 테이블 정의
const remodeling_img = db.remodeling_img;

exports.findAll = (req, res) => {
    const id = req.params.id;
    var condition = id ? { id: id } : null;
  
    remodeling.findAll(
        { 
            where: condition,
            attributes: ['title', 'apartment_name','company_id', 'area'],
            include: [
                {
                    model: remodeling_img,
                    attributes: ['sequence', 'img_path']
                }
            ]
        })
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
  exports.findByCompany = (req, res) => {
    const id = req.params.id;
    var condition = id ? { company_id: id } : null;
  
    remodeling.findAll(
        { 
            where: condition,
            attributes: ['title', 'apartment_name','company_id', 'area'],
            include: [
                {
                    model: remodeling_img,
                    attributes: ['sequence', 'img_path']
                }
            ]
        })
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

/*
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
    remodeling
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
*/
