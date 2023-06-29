const express = require("express");

const PORT = 3000;
const app = express();

app.all("*", (req, res) => {
  res.status(200).send("<h1>This is the homepage</h1>");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
