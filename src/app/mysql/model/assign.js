module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const Assign = sequelizeConfig.define('assign',{
            state:  {
                type: Sequelize.INTEGER,
                comment: '신청 상태'
            },
            memo: {
                type: Sequelize.STRING,
                comment: '기타 사항 (중단 메시지 등)'
            },
            accept_time: {
                type: Sequelize.DATE,
                comment: '수락 시간'
            },
            stop_state: {
                type: Sequelize.INTEGER,
                comment: '중단 됐을 당시 상태'
            },
            contract_date: {
                type: Sequelize.DATE,
                comment: '계약 날짜'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "assign", // 테이블 이름
            timestamps: true, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return Assign;
};