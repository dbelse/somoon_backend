const db = require('../model/index.js');
const review = require('../model/review.js');
const Review= db.review;
const Op = db.sequelize.Op;

// 관계있는 테이블 정의
const remodeling_apply = db.remodeling_apply;
const assign = db.assign;
const company = db.company;

/*
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
*/

// Retrieve all review's row
// review에서 평점(point), 리뷰내용(content)
// remodeling_apply에서 고객명(name), 주소(address), 주거타입(building_type), 평수(area)
// remodeling_apply.id = review.remodeling_apply_id 인 row들
// 가져오기
/*
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    // 안되는 목록
    // .get_remodeling_apply()
    // .get_remodeling_applys()
    // .get_remodeling_applies()
    // .getremodeling_apply()
    // .getremodeling_applys()
    // .getremodeling_applies()
    // .getremodelingapply()
    // .getremodelingapplys()
    // .getremodelingapplies()
    // .get_Remodeling_Apply()
    // .get_Remodeling_Applys()
    // .get_Remodeling_Applies()
    // .getRemodeling_Apply()
    // .getRemodeling_Applys()
    // .getRemodeling_Applies()
    // .getRemodelingApply()
    // .getRemodelingApply()
    // .getRemodelingApplies()
    // .getRemodeling_apply()
    Review.getRemodeling_apply()
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
  */
  
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Review.findAll(
        { 
            where: condition,
            include: [
                {
                    model: remodeling_apply,
                    attributes: ['name', 'address', 'area'], // building_type은 널 값이 많아 생략..
                            include: [
                                {
                                    model: company,
                                    attributes: ['name'],
                                    through: {
                                        attributes: []
                                    }
                                }
                            ]
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