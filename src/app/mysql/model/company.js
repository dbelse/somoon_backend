module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const company = sequelizeConfig.define('company',{
            name:  {
                type: Sequelize.STRING,
                comment: '회사명'
            },
            location: {
                type: Sequelize.INTEGER,
                comment: '회사 위치(구까지)'
            },
            address: {
                type: Sequelize.STRING,
                comment: '회사 주소'
            },
            active_location: {
                type: Sequelize.INTEGER,
                comment: '활동 지역'
            },
            introduction: {
                type: Sequelize.STRING,
                comment: '소개글'
            },
            limit_fee: {
                type: Sequelize.INTEGER,
                comment: '최소시공금액'
            },
            state: {
                type: Sequelize.BOOLEAN,
                comment: '입점여부상태'
            },
            phone: {
                type: Sequelize.STRING,
                comment: '연락처'
            },
            as_provide: {
                type: Sequelize.BOOLEAN,
                comment: 'as 제공 여부'
            },
            as_warranty: {
                type: Sequelize.STRING,
                comment: 'as 제공 기간'
            },
            as_fee: {
                type: Sequelize.STRING,
                comment: 'as 금액'
            },
            profile_img: {
                type: Sequelize.STRING,
                comment: '프로필 이미지 경로'
            },
            area_fee: {
                type: Sequelize.INTEGER,
                comment: '평당 금액'
            },
            start_year: {
                type: Sequelize.INTEGER,
                comment: '일 시작 년도'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "company", // 테이블 이름
            freezeTableName: true, // 복수형으로 바뀌지 않도록
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return company;
};