import express from "express";

const PORT = 4000;

const app = express();

const handleHome = function(req, res) {
    return res.send("<h1>hello world [form html]</h1>");
}

const handleLogin = function(req, res) {
    return res.send({message:"Login here!"});
}

app.get("/", handleHome);
app.get("/login", handleLogin)

const handleListening = function() {
    console.log(`Server is listening on port http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
