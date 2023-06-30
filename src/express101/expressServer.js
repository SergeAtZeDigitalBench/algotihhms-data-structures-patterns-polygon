const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.status(200);
  fs.createReadStream(
    path.resolve(__dirname, "templates", "homepage.html")
  ).pipe(res);
});

app.all("*", (req, res, next) => {
  res.status(404);
  fs.createReadStream(path.resolve(__dirname, "templates", "404.html")).pipe(
    res
  );
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
