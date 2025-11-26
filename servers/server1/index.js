
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Servidor 1");
});
server.listen(3000, () => console.log("Servidor 1 rodando"));
