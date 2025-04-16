import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{str:"Enter your name below 👇"});
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  var chrs = req.body.fName.length + req.body.lName.length;
  console.log(chrs);
  res.render("index.ejs", {str:`There are ${chrs} letters in your name.`});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
