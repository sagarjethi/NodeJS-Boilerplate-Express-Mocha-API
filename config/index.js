// TODO: Move this somewhere
let config = null;

switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        /* eslint-disable */
        config = require('./production');
        break;
    case 'stage':
    case 'staging':
        config = require('./staging/'); /* eslint-disable */
        break;
    case 'test':
    case 'testing':
        config = require('./testing/'); /* eslint-disable */
        break;
    case 'dev':
    case 'development':
    default:
        config = require('./development/'); /* eslint-disable */
}

module.exports = config;