module.exports.index = function(server,req,res){

    var connection = server.config.dbConnection();
    var noticiasModel = new server.app.models.NoticiaDAO(connection);
    
    noticiasModel.getUltimasNoticias(function(error,result){
        console.log(result);
        res.render('home/index.ejs',{noticias:result});
    });

}