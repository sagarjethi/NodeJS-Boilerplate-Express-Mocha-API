const userController = require('./user.controller');

class UserRoute {
    constructor(app) {
        this.app = app;
        this.initRoutes();
    }
    initRoutes() {
        this.app.post(
            '/api/user/login',
            (req, res, next) => {
                userController.getAuthorization(req, res, next);
            },
        );
    }
}

module.exports = UserRoute;
