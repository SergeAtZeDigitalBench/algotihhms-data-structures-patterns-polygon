const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const app = express();

const validateUser = (req, res, next) => {
  // get some user data fro cookies
  // query db about the user found
  res.locals = {
    userValid: true,
    userInfo: { id: "123abc", name: "John Doe" },
  };

  next();
};

app.use(validateUser);

app.get("/", (req, res, next) => {
  const { userValid, userInfo } = res.locals;
  res.status(200).send(`<h1>Hello ${userInfo?.name || ""}</h1><p>Homepage</p>`);
});

app.get("/admin", (req, res, next) => {
  const { userValid, userInfo } = res.locals;
  res
    .status(200)
    .send(`<h1>Hello ${userInfo?.name || ""}</h1><p>Admin page</p>`);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
