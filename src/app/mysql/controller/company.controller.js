const db = require('../model/index.js');
const Company= db.company;
const Op = db.sequelize.Op;

// 관계있는 테이블 정의
const assign = db.assign;

exports.findAllRepresent = (req, res) => {
    /*
    assign.findAll(
        { 
            attributes: [
                [db.sequelize.fn('COUNT', db.sequelize.literal('IF(assign.state = 8, 1, NULL)')), 'construction'],
                [db.sequelize.fn('COUNT', db.sequelize.literal('IF(assign.state >= 4, 1, NULL)')), 'conseling']
            ],
            include: [
                {
                    model: Company,
                    where: {'state' : '1'},
                    attributes: ['name', 'as_warranty', 'represent_img1', 'represent_img2'],
                    right: true,
                    required: true
                }
            ],
            group: ['company_id']
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
  */
    
    Company.findAll(
        { 
            where: {'state' : '1'},
            attributes: ['name', 'as_warranty', 'represent_img1', 'represent_img2', 
            [db.sequelize.fn('COUNT', db.sequelize.literal('IF(assigns.state = 8, 1, NULL)')), 'construction'],
            [db.sequelize.fn('COUNT', db.sequelize.literal('IF(assigns.state >= 4, 1, NULL)')), 'counseling']],
            include: [
                {
                    model: assign,
                    attributes: []
                }
            ],
            group: ['id']
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