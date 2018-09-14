const http = require('http');

const hostname = '127.0.0.1';
//Porta do servidor ficara escutando
const port = 3000;

//Criação do Server 
const server = http.createServer((req, res) => {
  //Status  de sucesso para coneção
  res.statusCode = 200;
  // Cabeçalho da requisição
  res.setHeader('Content-Type', 'text/plain');
  //Texto que será exibido
  res.end('Portal de Notícias');

});

//Logs no servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
