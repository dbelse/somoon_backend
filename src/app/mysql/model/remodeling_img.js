module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const remodeling_img = sequelizeConfig.define('remodeling_img',{
            sequence: {
                type: Sequelize.INTEGER,
                comment: '사진 순서'
            },
            img_path: {
                type: Sequelize.STRING,
                comment: '사진 경로'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "remodeling_img", // 테이블 이름
            freezeTableName: true, // 복수형으로 바뀌지 않도록
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return remodeling_img;
};