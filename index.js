const App = require('./app/');
const config = require('./config/');

const newServer = new App(config);
newServer.startServer();

