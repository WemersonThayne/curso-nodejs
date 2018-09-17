const CONSULTA_BY_ID = 'select * from noticias where id_noticia = ';

module.exports = function(server){

    server.get('/noticia/detalhe',function(req, res){

    console.log("Acessando detalhe da noticia...");
      var connection = server.config.dbConnection();
      var noticiasModel = server.app.models.noticiaModel;

      noticiasModel.getNoticia(connection,  function(error, result){
            if(result){
                res.render('noticias/noticia.ejs', {noticias : result});
            } else if(error){
                res.render('Error ao tentar Listar as notícas'+error);
            }
        });


    });

}