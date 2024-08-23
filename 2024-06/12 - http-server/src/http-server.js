const http = require('http');

// Роутинга
// Обработки специальных типов данных

const requestListener = function (req, res) {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Home');
  } if (req.url === '/hello') {
    res.writeHead(200);
    res.end('Hello world');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);

console.log('started server');
