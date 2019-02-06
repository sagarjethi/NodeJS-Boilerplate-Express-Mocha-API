class Config {
    constructor(){
        console.log('Setting up config');
    }
    getPort(){
        return process.env.port? process.env.port: 3000
    }
    getUrl(){
        return 'http://localhost:'+this.getPort()+'/'; 
    }
}

let config = new Config();

module.exports = {
    serverConfig: config
}