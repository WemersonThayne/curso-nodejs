const server = require('./config/server');
const hostname = '127.0.0.1';
//Porta do servidor ficara escutando
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
