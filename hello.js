/**
 * Created by 206438247 on 8/8/2014.
 */

var express = require('express');
var app = express();
var port = 3000;

app.get('/hi/', function(req, res){
  res.write("Hello World!");
  res.end();
});

app.get('/bye/', function(req, res){
  res.write("Cya!");
  res.end();
});

app.listen(port, function(){
  console.log("Server Started");
});