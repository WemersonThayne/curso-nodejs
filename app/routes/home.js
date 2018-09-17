module.exports = function(server){
    server.get('/',function(req, res){
        console.log("Index.ejs.......  Acessado...");
        res.render('home/index.ejs')
    });
}

