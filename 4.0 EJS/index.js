import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var day = new Date().getDay();
    console.log(day);
    var str;
    // day = 0;
    if(day == 0 || day == 6) {
        str = `Hurraaa Its Weekend Enjoy your Time`;
    } else {
        str = `Ooo Its weekday work hard to get weekend free`;
    }
    console.log(str);
    res.render("index.ejs", {message: str});
});



app.listen(port, () => {
    console.log(`listening on port:${port}`);
});