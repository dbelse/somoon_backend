module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const remodeling_apply = sequelizeConfig.define('remodeling_apply',{
            name:  {
                type: Sequelize.STRING,
                comment: '고객 이름'
            },
            phone: {
                type: Sequelize.STRING,
                comment: '고객 연락처'
            },
            address: {
                type: Sequelize.STRING,
                comment: '고객 신청 주소'
            },
            building_type: {
                type: Sequelize.STRING,
                comment: '고객 신청 주거타입'
            },
            area: {
                type: Sequelize.STRING,
                comment: '평수'
            },
            due: {
                type: Sequelize.STRING,
                comment: '고객 리모델링 예정일'
            },
            budget: {
                type: Sequelize.STRING,
                comment: '고객 리모델링 예산'
            },
            state: {
                type: Sequelize.STRING,
                comment: '고객 리모델링 신청 상태'
            },
            //password, assign_time, createdAt, updatedAt 생략
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "remodeling_apply", // 테이블 이름
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return remodeling_apply;
};