const express = require('express');
const server = express();
server.set('view engine','ejs');
const hostname = '127.0.0.1';
//Porta do servidor ficara escutando
const port = 3000;

server.get('/',function(req, res){
    console.log("Index.ejs.......  Acessado...");
    res.render('home/index.ejs')
});

server.get('/cadastro/noticia',function(req, res){
    console.log("Acessando cadastro de notícia...");
    res.render('admin/form_add_noticia.ejs')
});

server.get('/noticias',function(req, res){
    console.log("Acessando notícias...");
    res.render('noticias/noticias.ejs')
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });