const { createServer } = require("node:http");
const { stringify } = require("node:querystring");

const os = require("os");

const cpuinfo = {
    platform: os.platform(),
    arch: os.arch(),
    cores: os.cpus().length,
};

http.createServer((req, res) => {
   if (req.url === "/cpuinfo" && req.method === 'GET') {
       
    setTimeout(() => {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      });

      res.end(JSON,stringify(cpuinfo));
    }, math.floor(Math.random()*2000));

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
        });
        res.end("Not Found");
    }
   }).listen(3000, () => {
      console.log("Server listening on port 3000");
   });