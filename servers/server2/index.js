
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Servidor 2");
});
server.listen(3000, () => console.log("Servidor 2 rodando"));
