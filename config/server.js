const express = require('express');
const consign = require('consign');

const server = express();

server.set('view engine','ejs');
server.set('views','./app/views');

consign().include('app/routes')
         .then('config/dbConnection.js')
         .then('app/models')
         .into(server);

module.exports = server;