const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './app/views');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(expressValidator());
server.use(express.static('./app/public'));

consign().include('app/routes')
         .then('config/dbConnection.js')
         .then('app/models')
         .then('app/controllers')
         .into(server);

module.exports = server;