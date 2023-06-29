const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/": {
      res.writeHead(200, { "Content-Type": "text/html" });
      const readable = fs.createReadStream(`${__dirname}/node.html`);
      readable.pipe(res);
      break;
    }
    case "/node.png": {
      res.writeHead(200, { "Content-Type": "image/png" });
      const readable = fs.createReadStream(`${__dirname}/node.png`);
      readable.pipe(res);
      break;
    }
    case "/style.css": {
      res.writeHead(200, { "Content-Type": "text/css" });
      const readable = fs.createReadStream(`${__dirname}/style.css`);
      readable.pipe(res);
      break;
    }
    default: {
      res
        .writeHead(200, { "Content-Type": "text/html" })
        .write("<h1>Page not found.</h1>");
      res.end();
      break;
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
