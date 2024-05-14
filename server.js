const http = require('node:http');
const os = require('os');


const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET' && req.url === '/') {
    // Simulate asynchronous operation with random delay
    const delay = Math.random() * 1000; // Delay between 0-1 seconds
    setTimeout(() => {
      const cpuInfo = {
        cores: os.cpus().length,
        model: os.cpus()[0].model,
      };
      const osInfo = {
        platform: os.platform(),
        release: os.release(),
      };

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ cpu: cpuInfo, os: osInfo }));
    }, delay);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, "127.0.0.1");

console.log("server running");
