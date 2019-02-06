const bodyParser = require('body-parser');
const cors = require('cors');

class CommonMiddlewares {
    constructor(app) {
        this.app = app;
        this.initialize();
    }

    initialize() {
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
}


module.exports = CommonMiddlewares;
