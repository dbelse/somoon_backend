module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Recommend = sequelizeConfig.define('recommend',{
            title:  {
                type: Sequelize.STRING,
                comment: '제목'
            },
            url: {
                type: Sequelize.STRING,
                comment: '하이퍼링크'
            },
            img_path: {
                type: Sequelize.STRING,
                comment: '사진 경로'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "RECOMMEND", // 테이블 이름
            timestamps: false, // createAt & updateAt 활성화
            paranoid: false // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
        }
    );

    return Recommend;
};
