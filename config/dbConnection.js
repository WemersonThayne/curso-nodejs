
const  mysql = require('mysql');
var connection  = function(){
    console.log('Conexão com o Banco de Dados realizada com sucesso.....');
   return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '1234',
        database:'portal_noticias',
        insecureAuth : true
    });
}

module.exports = function(){
    return connection;
}