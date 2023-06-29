const http = require("http");

const PORT = 1337;

const server = http.createServer(async (req, res) => {
  res
    .writeHead(200, "OK", {
      "Content-Type": "text/html",
    })
    .end("ok");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Http server at http://localhost:${PORT}`);
});
