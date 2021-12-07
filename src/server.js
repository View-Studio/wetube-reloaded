import express from "express";

const PORT = 4000;
const AUTHORITY = true;

const app = express();



const logger = function(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
};

const privateMiddleware = function(req, res, next) {
    const url = req.url;
    if (url === "/protected" && AUTHORITY === false) {
        return res.send("Not Allowed!");
    } else if (url === "/protected" && AUTHORITY === true) {
        console.log("You allowed private page.");
        next();
    } else {
        console.log(`You allowed ${url} page`);
        next();
    }
};

const handleHome = function(req, res) {
    return res.send("<h1>I love middleware</h1>");
};

const handleProtected = function(req, res) {
    return res.send("Welcome to private lounge!");
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);
app.get("/protected", handleProtected);



const handleListening = function() {
    console.log(`Server is listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
