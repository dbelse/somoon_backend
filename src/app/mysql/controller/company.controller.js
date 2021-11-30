const db = require('../model/index.js');
const Company= db.company;
const Op = db.sequelize.Op;

// 관계있는 테이블 정의
const assign = db.assign;

exports.findAllRepresent = (req, res) => {
  const id = req.params.id;
  const condition = id ? {'id':id} : {'state':'1'};

    Company.findAll(
        { 
            where: condition,
            attributes: ['id', 'name', 'as_warranty', 'represent_img1', 'represent_img2', 'owner_name', 'address',
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