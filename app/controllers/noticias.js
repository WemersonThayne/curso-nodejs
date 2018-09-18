module.exports.noticias = function (server, req, res) {
    var connection = server.config.dbConnection();
    var noticiasModel = new server.app.models.NoticiaDAO(connection);
    noticiasModel.getNoticias(function (error, result) {
        if (result) {
            res.render('noticias/noticias.ejs', { noticias: result });
        } else if (error) {
            res.render('Error ao tentar Listar as notícas');
        }
    });
}


module.exports.noticia = function (server, req, res) {

    console.log(req.query);

    var connection = server.config.dbConnection();
    var noticiasModel = new server.app.models.NoticiaDAO(connection);
    noticiasModel.getNoticia(req.query.id_noticia,function (error, result) {
        if (result) {
            res.render('noticias/noticia.ejs', { noticias: result });
        } else if (error) {
            res.render('Error ao tentar Listar as notícas' + error);
        }
    });
}

