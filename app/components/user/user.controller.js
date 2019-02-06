/* eslint-disable no-underscore-dangle */
const User = require('./user.model');
const responseService = require('../../utils/ResponseService');
const logger = require('../../utils/logging');


// TODO: Add Validation for request parameters using Joi library
exports.getAuthorization = function (req, res) {
    const username = req.body.username || '';
    const password = req.body.password || '';
    if (username && password) {
        User
            .checkCredentials(username, password)
            .then((result) => {
                logger.log('info', `${username} loggedin successfully`);
                responseService.send({
                    status: responseService.getCode().codes.OK,
                    data: result,
                }, res);
            })
            .catch((err) => {
                logger.log('error', `${username} loggedin unsuccesful, wrong username/password error is - ${err} `);
                responseService.send({
                    status: responseService.getCode().codes.UNAUTHORIZED,
                    data: 'Wrong username and password',
                }, res);
            });
    } else {
        responseService.send({
            status: responseService.getCode().codes.BAD_REQUEST,
            data: 'Please provide username and password',
        }, res);
    }
};

