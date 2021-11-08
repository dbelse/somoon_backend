module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Tutorial = sequelizeConfig.define('tutorial',{
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            published: {
                type: Sequelize.BOOLEAN
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "tutorials", // 테이블 이름
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return Tutorial;
};