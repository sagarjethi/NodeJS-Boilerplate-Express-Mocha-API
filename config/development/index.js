class Config {
    constructor(){
    }
    getPort(){
        return process.env.port? process.env.port: 3000
    }

    getTokenExpirationTime(){
        return 3600;
    }
}

class DbConfig {
    //TODO: Please add proper credentials here
    getUser(){ return '' }
    getHost(){ return '' } 
    getDatabase(){ return '' }
    getPassword(){ return ''  } 
    getPort(){ return 3306 }

}

let config = new Config();
let dbConfig = new DbConfig();

module.exports = {
    serverConfig: config,
    dbConfig: dbConfig
}