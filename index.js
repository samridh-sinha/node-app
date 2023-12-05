const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send("Hello World I am Samridh");
});

app.listen(80);
