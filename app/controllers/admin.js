module.exports.cadastro_noticia = function(server,req,res){
    res.render('admin/form_add_noticia.ejs',{validacao: [], noticia: {}})
}


module.exports.salvar_noticia = function(server,req,res){
   
    var noticia = req.body;
    var connection = server.config.dbConnection();
    req.assert('titulo','Título é um campo Obrigatório.').notEmpty();
    req.assert('resumo','Resumo dever ter entre 10 a 100 caracteres .').notEmpty().len(10,100);
    req.assert('autor','Autot é um campo Obrigatório.').notEmpty();
    req.assert('data_noticia','Data da Notícia é um campo Obrigatório.').notEmpty();
    req.assert('noticia','Notícia é um campo Obrigatório.').notEmpty();

    var erros = req.validationErrors();

    console.log("Erross:"+JSON.stringify(erros));
    if (erros){
        res.render('admin/form_add_noticia.ejs',{validacao: erros, noticia: noticia});
        return;
    }else{
        
        var noticiasModel = new server.app.models.NoticiaDAO(connection);
        noticiasModel.salvarNoticia(noticia, function(error, result){
              if(result){
                  console.log('cadastrado com sucesso...');
                  res.redirect('/noticias');
              } else if(error){
                  res.render('Error ao tentar salvar noticias: '+error);
              }
        });

    }    


}