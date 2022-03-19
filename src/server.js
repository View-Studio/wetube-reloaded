import express from "express";

const PORT = 4000;

const app = express();

const methodLogger = (req, res, next) => {
  console.log(`METHOD: ${req.method}`);
  next();
};
const routerLogger = (req, res, next) => {
  console.log(`PATH: ${req.path}`);
  next();
};

const home = (req, res) => {
  return res.send("<h1>Hello world.</h1>");
};
const login = (req, res) => {
  return res.send("Login here!");
};

app.use(methodLogger, routerLogger);

app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
