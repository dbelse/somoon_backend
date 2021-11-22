module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const review = sequelizeConfig.define('review',{
            point:  {
                type: Sequelize.STRING,
                comment: '평점'
            },
            content: {
                type: Sequelize.STRING,
                comment: '리뷰 내용'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "review", // 테이블 이름
            freezeTableName: true, // 복수형으로 바뀌지 않도록
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return review;
};