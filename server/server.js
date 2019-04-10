var express = require('express');
var app = express();
var path = require('path');
console.log("dir ",__dirname+'../dist/Caye-Prototype');

app.use(express.static(__dirname+'../dist/Caye-Prototype'));

app.listen(8083,()=> console.log("server is running on 8083"));
