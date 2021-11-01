// Sequelize를 이용해 DB 연결
// java에서 conn해주는거랑 비슷한듯?
const dbConfig = require('../config/config.js');
const Sequelize = require('sequelize');

const sequelizeConfig = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};
db.sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;

// 모델 설정
db.tutorial = require('./tutorial.js')(sequelizeConfig, Sequelize);
db.remodeling = require('./remodeling.js')(sequelizeConfig, Sequelize);
db.review = require('./review.js')(sequelizeConfig, Sequelize);
db.remodeling_apply= require('./remodeling_apply.js')(sequelizeConfig, Sequelize);
db.recommend= require('./recommend.js')(sequelizeConfig, Sequelize);

// 관계 설정
db.review.hasOne(db.remodeling_apply, {foreignKey: 'id', source: 'remodeling_apply_id'})

module.exports = db;