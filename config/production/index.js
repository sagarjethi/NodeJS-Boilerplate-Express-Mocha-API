class Config {
    constructor(){
        console.log('Setting up config');
    }
    getPort(){
        return process.env.port? process.env.port: 5000
    }
}

let config = new Config();

module.exports = {
    serverConfig: config
}