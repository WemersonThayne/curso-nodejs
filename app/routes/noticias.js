//const dbConnection = require('../../config/dbConnection');

module.exports = function (server) {
    server.get('/noticias', function (req, res) {
        console.log("Acessando notícias...");
        server.app.controllers.noticias.noticias(server, req, res);
    });


    server.get('/noticia/detalhe', function (req, res) {
        console.log("Acessando detalhe da noticia...");
        server.app.controllers.noticias.noticia(server, req, res);

    });

}