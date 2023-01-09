let express = require('express');
let app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

console.log('hello world');

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
    res.json({message: 'Hello json'})
})


































 module.exports = app;
