const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080)
  .then(() => {
    console.log('Server is running on port 8080');
  })
  .catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
