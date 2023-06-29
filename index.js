const http = require("http");
const fs = require("fs");

const PORT = 1337;

const server = http.createServer(async (req, res) => {
  const readable = fs.createReadStream(`${__dirname}/src/templates/index.html`);
  res.writeHead(200, "OK", {
    "Content-Type": "text/html",
  });
  readable.pipe(res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Http server at http://localhost:${PORT}`);
});
