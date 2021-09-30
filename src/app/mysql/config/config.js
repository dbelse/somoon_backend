module.exports = {
    /*
    String serverIP = "localhost"; //로컬에서 돌릴땐 203.245.44.103로 수정해서 클래스 만들고 적용
			String dbname = "somunhouse";
			String portNum = "3306";
			String url = "jdbc:mysql://"+serverIP+":"+portNum+"/"+dbname+"?serverTimezone=Asia/Seoul";
			//String url = "jdbc:mysql://"+serverIP+"/"+dbname+"";
			String user = "somunhouse";
			String pass = "somun500^^";
    */
    host: '203.245.44.103',
    username: 'somunhouse',
    password: 'somun500^^',
    db: 'somunhouse',
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};