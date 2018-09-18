module.exports = function(server){
    
    server.get('/noticia/formulario/cadastro',function(req, res){
        console.log("Acessando cadastro de notícia...");
       server.app.controllers.admin.cadastro_noticia(server,req,res);
    });

    server.post('/noticia/salvar',function(req, res){
        server.app.controllers.admin.salvar_noticia(server,req,res);
    });
    
} 