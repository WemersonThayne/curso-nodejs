module.exports = function(server){
    server.get('/cadastro/noticia',function(req, res){
        console.log("Acessando cadastro de notícia...");
        res.render('admin/form_add_noticia.ejs')
    });
} 