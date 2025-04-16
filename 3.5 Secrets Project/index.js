//The password is ILoveProgramming

import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var pass = "ILoveProgramming";

// Middleware body-parser.
app.use(bodyParser.urlencoded({extended: true}));

// Routes are as under.
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// app.get("/check", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

app.post("/check", (req,res) => {
    console.log(req.body);
    if(req.body.password === pass) {
        console.log("I am in post check password correct.")
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        console.log("password not correct");
        res.sendFile(__dirname + "/public/index.html");
    }
});






app.listen(port, () => {
    console.log(`Listening at port : ${port}`);
});