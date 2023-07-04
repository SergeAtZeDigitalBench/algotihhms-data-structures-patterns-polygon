const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "ejs");
app.set("views", [path.resolve(__dirname, "src", "views")]);
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.status(200).render("index");
});
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
