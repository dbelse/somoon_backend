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
db.remodeling_apply = require('./remodeling_apply.js')(sequelizeConfig, Sequelize);
db.recommend = require('./recommend.js')(sequelizeConfig, Sequelize);
db.assign = require('./assign.js')(sequelizeConfig, Sequelize);
db.company = require('./company.js')(sequelizeConfig, Sequelize);
db.remodeling_img = require('./remodeling_img')(sequelizeConfig, Sequelize);

// 관계 설정
db.review.belongsTo(db.remodeling_apply, {foreignKey: 'remodeling_apply_id', target: 'remodeling_apply_id'})
db.remodeling_apply.hasOne(db.review, {foreignKey: 'id', target: 'remodeling_apply_id'})

db.remodeling_apply.belongsToMany(db.company, {through: db.assign})
db.company.belongsToMany(db.remodeling_apply, {through: db.assign})

db.company.hasMany(db.assign, {foreignKey: 'company_id', source: 'id'})
db.assign.belongsTo(db.company, {foreignKey: 'company_id', target: 'id'})

db.company.hasMany(db.remodeling, {foreignKey: 'company_id', source: 'id'})
db.remodeling.belongsTo(db.company, {foreignKey: 'company_id', target: 'id'})

db.remodeling.hasMany(db.remodeling_img, {foreignKey: 'remodeling_id', source: 'id'})
db.remodeling_img.belongsTo(db.remodeling, {foreignKey: 'remodeling_id', target: 'id'})
module.exports = db;