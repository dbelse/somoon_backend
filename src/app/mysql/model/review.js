module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Review = sequelizeConfig.define('review',{
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
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
        }
    );

    return Review;
};