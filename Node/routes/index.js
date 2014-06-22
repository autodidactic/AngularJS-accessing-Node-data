var express = require('express'); 
var router = express.Router(); 
var app = express(); 
var haml = require('haml');
  var fs = require('fs'); 
 var path = require('path'); 
 var dburl = "test"; 
 var coll = ["things"]; 
 var db = require('mongojs').connect(dburl,coll); 
    var connect = require('connect');
	
  app.use(connect.json());
  app.use(connect.urlencoded());
  
/* GET home page. */
router.get('/', function(req, res) { 
    res.render('index', { title: 'Express' }); 
}); 
  
/* GET Hello World page. */
router.get('/helloworld', function(req, res) { 
    res.render('helloworld', { title: 'Hello, World!' }); 
}); 
  
 //  db.things.remove('',function(){});
/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET, POST");
	db.things.find('', function(err, users) {
	if( err || !users) console.log("No users found");
	else
	{
	res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<!DOCTYPE html><html><head><title>res vs app render</title></head><body><table>');
		res.write(' <th> Users </th>');
		str = '';
		users.forEach( function(user) {
			res.write('<tr><td> <a href="' + user.email + '"> '+ user.username + '</a>' + '</td></tr>\n');
			// haml.render(user.name + user.email);
		});
		str = str.trim();
		str = str.substring(0,str.length-1);
		 str = str + '';
		 res.write(' </table></body></html>');
		 
		res.end("Rows returned" + db.things.find.count);
		
		/* str='[';
		users.forEach( function(user) {
			str = str + '{ "name" : "' + user.username + '"},' + '{ "email" : "' + user.email + '"},' + '{ "pwd" : "' + user.pwd + '"},' + '\n';
			 
		});
		str = str.trim();
		str = str.substring(0,str.length-1);
		str = str + ']';
		res.end( str); */
	}
});	
     
});
 
  
  router.post('/newuser',function(req,res){
     console.log("POST: ");
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  res.header("Access-Control-Allow-Methods","GET, POST");
   console.log(req.body);
  //console.log(req.body.mydata);
 // var jsonData = JSON.parse(req.body.mydata);
  db.things.save({username:'user', password: 'pass',email:'dsds@' },function(err,saved){
      if(err) console.log("error" + err);
      else
      {
      console.log("data saved");
      }
  })
  
  
  });	
module.exports = router; 
