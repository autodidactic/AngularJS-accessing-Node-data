var express = require('express'), 

 path = require('path'); 
 var dburl = "test"; 
 var connect = require('connect');
 var coll = ["things"]; 
 //var db = require('mongojs').connect(dburl,coll); 
 var http = require('http'); 
 var app = express(); 
var routes = require('./routes/index'); 
var users = require('./users/users'); 
var engines = require('consolidate');
 app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
 app.set('views', __dirname + '/views') 
   app.use(connect.json());
  app.use(connect.urlencoded());
  
 var fs = require('fs'); 
app.get('/api', function (req, res) { 
    res.send('Ecomm API is running'); 
     
}); 

  app.listen(process.env.PORT);
  
app.use('/', routes); 
app.use('/users', users); 

 
 module.exports = app;
 


 
