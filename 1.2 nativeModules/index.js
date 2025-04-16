const fs = require("fs");

// fs.writeFileSync("msg.txt","Hello from NodeJS...", (err) => {
//     if (err) throw err;
//     console.log("file successfully created!")
// });

fs.readFile("./msg.txt","utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
// console.log(str);