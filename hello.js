/**
 * Created by 206438247 on 8/8/2014.
 */

var express = require('express');
var app = express();
var port = 3000;

app.get('*', function(req, res){
  res.write("Hello World!");
  res.end();
});

app.listen(port, function(){
  console.log("Server Started");
});