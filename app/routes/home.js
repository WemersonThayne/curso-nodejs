module.exports = function(server){
    server.get('/',function(req, res){
        console.log("Index.ejs.......  Acessado...");
        server.app.controllers.home.index(server,req,res);
    });
}

