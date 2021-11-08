module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Remodeling = sequelizeConfig.define('REMODELING',{
            Title:  {
                type: Sequelize.STRING,
                comment: '제목'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "REMODELING", // 테이블 이름
            timestamps: false, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return Remodeling;
};
