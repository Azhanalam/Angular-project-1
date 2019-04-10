var express = require('express');
var app = express();
var path = require('path');
console.log("dir ",'./../dist/Caye-Prototype');

app.use(express.static('./../dist/Caye-Prototype'));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve('./../dist/Caye-Prototype/index.html'));
});

app.listen(8083,()=> console.log("server is running on 8083"));
