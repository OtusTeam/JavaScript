// net - TCP
// tls - SSL/TSL
// http - http
// https - https


const net = require('net');

const client = new net.Socket();

client.connect(8000, '127.0.0.1', () => {
  console.log('Connected');
  client.write('GET / HTTP/1.1\r\n');
  client.write('Host: localhost\r\n');
  client.write('Connection: keep-alive\r\n');
  client.write('\r\n');
});

client.on('data', (data) => {
  console.log('Received: ' + data);
});

client.on('end', () => {
  console.log('Server disconnected');
});
