
const CONSULTA_TODOS = 'select * from noticias order by data_criacao  desc';
const CONSULTA_BY_ID = 'select * from noticias where id_noticia = ';
const INSERT_NOTICIA = 'insert into noticias set ? ';
const CONSULTA_ULTIMAS_NOTICIAS  = 'select * from noticias order by data_criacao desc limit 5';

function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.getNoticias = function (callback){
    console.log('Consultando todas as noticias....');
    this._connection.query(CONSULTA_TODOS,callback); 
}

NoticiaDAO.prototype.getNoticia = function(idNoticia,callback){
    this._connection.query(CONSULTA_BY_ID + idNoticia,callback); 
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query(INSERT_NOTICIA,noticia,callback); 
}

NoticiaDAO.prototype.getUltimasNoticias = function(callback){
    this._connection.query(CONSULTA_ULTIMAS_NOTICIAS,callback);
}

module.exports = function(){
    return NoticiaDAO;
}