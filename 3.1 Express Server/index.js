import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Hello World This is Express Server in Action.")
});

app.listen(port, ()=>{
    console.log(`: Server up and running at port ${port} :`);
});