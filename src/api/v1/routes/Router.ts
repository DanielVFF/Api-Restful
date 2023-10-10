//import {app} from '../config/ServerConfig';
const { app } = require('../config/ServerConfig');

const users = require('./UserRoutes');

app.use('/users',users);

module.exports.app = app;