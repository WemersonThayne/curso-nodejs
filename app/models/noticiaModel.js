
const CONSULTA_TODOS = 'select * from noticias';
const CONSULTA_BY_ID = 'select * from noticias where id_noticia = ';




module.exports = function(){
    this.getNoticias = function (connection, callback){
        connection.query(CONSULTA_TODOS,callback); 
    }
    this.getNoticia = function(connection, callback){
        connection.query(CONSULTA_BY_ID + 1,callback); 
    }

    return this;
}