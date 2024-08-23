const net = require('net');

// net - это пакет для создания tcp серверов и клиентов.

const port = 8000;

const server = new net.Server();

server.listen(port, function() {
    console.log(`Server listening for connection requests on socket localhost: ${port}`);
});

server.on('connection', function(socket) {
  socket.setEncoding('utf8');

  // Поток данных, мы его обрабатывать и отправлять данные обратно
  socket.on('data', (data) => {
    console.log('data', data);
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type: text/plain\r\n');
    socket.write('\r\n');
    socket.write('Hello, World!');
    socket.end();
  });

  // Когда соединение завершит
  socket.on('end', function() {
    console.log('Closing connection with the client');
  });

  // Когда соединение упало с ошибкой
  socket.on('error', function(err) {
    console.log(`Error: ${err}`);
  });
});
