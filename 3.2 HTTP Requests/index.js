import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.listen(port, ()=>{
    console.log(`Express Server up and Running at port ${port}.`);
});