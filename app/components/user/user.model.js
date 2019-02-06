const db = require('../../db/');
const userModel = require('../../models/userModel');
const logger = require('../../utils/logging');

exports.checkCredentials = function (username, password) {
    return new Promise(((resolve, reject) => {
        // TODO: Add isActive checker and password checking
        const queryString = `SELECT ${userModel.status} from ${userModel.tableName} 
        WHERE ${userModel.username} = '${username}' and ${userModel.password} = '${password}'`;
        db.query(queryString, (err, res) => {
            if (err) {
                logger.log('error', ` checkCredentials - ${username} - ${err}`);
                reject(err);
            } else if (res.rowCount === 0) {
                // user does not exist
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('Email does not exist');
            } else {
                resolve(res);
            }
        });
    }));
};

