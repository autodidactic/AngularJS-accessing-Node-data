var express = require('express'); 
var router = express.Router(); 
var app = express(); 
  
  
/* GET home page. */
router.get('/', function(req, res) { 
    res.render('index', { title: 'Express' }); 
}); 
  
/* GET Hello World page. */
router.get('/helloworld', function(req, res) { 
        res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET, POST");
    res.render('helloworld', { title: 'Hello, World!' }); 
}); 
  
 
 
  
  router.get('/userList', function(req,res){
      res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET, POST");
       res.render('userList', { title: 'Users, World!' }); 
  });
  
  
  router.get('/newuser',function(req,res){
          res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET, POST");
     res.render('newuser',{title: 'Add new user'}) ;
  });
module.exports = router; 
