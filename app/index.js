const express = require('express');
const Components = require('./components/');
const Middlewares = require('./middlewares');

class Server {
    constructor(config) {
        this.app = express();
        this.config = config;
        this.initializeApp();
    }

    initializeApp() {
        this.initConfig();
        this.setMiddlewares();
        this.setComponents();
    }

    initConfig() {
        this.port = this.config.serverConfig.getPort();
        this.app.set('port', this.port);
    }

    setMiddlewares() {
        this.middlewares = new Middlewares(this.app);
    }

    setComponents() {
        this.components = new Components(this.app);
    }

    startServer() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on port : ${this.port}`); // eslint-disable-line no-console
        });
        this.isServerUp();
    }

    isServerUp() {
        this.app.get('/isServerUp', (req, res) => {
            res.send('Server is up');
        });
    }
}

module.exports = Server;
