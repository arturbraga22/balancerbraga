
const http = require('http');

const servers = [
  'http://server1:3000',
  'http://server2:3000',
  'http://server3:3000'
];

let current = 0;

const server = http.createServer((req, res) => {
  const target = servers[current];
  current = (current + 1) % servers.length;

  http.get(target, (resp) => {
    let data = '';
    resp.on('data', chunk => data += chunk);
    resp.on('end', () => {
      res.writeHead(200);
      res.end(data);
    });
  }).on("error", (err) => {
    res.writeHead(500);
    res.end("Erro ao conectar no servidor");
  });
});

server.listen(3000, () => console.log("Load Balancer rodando na porta 3000"));
