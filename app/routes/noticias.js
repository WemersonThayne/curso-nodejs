//const dbConnection = require('../../config/dbConnection');

module.exports = function(server){

    server.get('/noticias',function(req, res){

    console.log("Acessando notícias...");
      var connection = server.config.dbConnection();
      var noticiasModel = server.app.models.noticiaModel;

      noticiasModel.getNoticias(connection,  function(error, result){
            if(result){
                res.render('noticias/noticias.ejs', {noticias : result});
            } else if(error){
                res.render('Error ao tentar Listar as notícas');
            }
        });

    });

}