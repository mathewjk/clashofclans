	const express = require('express')
	const app = express()
	app.use(express.static("public"));
	var Datastore = require('nedb')
    var db = new Datastore({filename:'data.db',autoload:true});
    app.set("port",process.env.PORT||7000)
 	app.set('view engine','ejs');
 	app.get("/",function(req,res){
 		res.sendFile(__dirname+"/public/home.html")
 	})
 	app.get("/login",function(req,res){
 		res.sendFile(__dirname+"/public/login.html")
 	})
 	app.get("/home",function(req,res){
 		res.sendFile(__dirname+"/public/register.html")
 	})
 	app.get("/troop",function(req,res){
 		res.sendFile(__dirname+"/public/troop.html")
 	})
 	app.listen(app.get('port'), function () 
		{
  			console.log('Open!!');
		})
 	app.get("/loginsubmit",function(req,res)
		{
			var pas=req.query.password;
			var em=req.query.email;	
			var person={
				"password":pas,
				"email":em
			}	

			db.find(person,function(err,result){

    		if(result.length!=0)
    		{
    			db.find(per,function(err1,res1){
    				res.sendFile(__dirname+"/public/home.html")
    			})
    			
    		}
    		else
    			res.send("No user found")
    	})	
	app.get("/regsubmit",function(req,res)
		{
			var name=req.query.name;
			var pas=req.query.password;
			var em=req.query.email;
			var user=req.query.username;
			var person={
				"name":name,
				"password":pas,
				"email":em,
				"username":user
			}
			db.insert(person,function(err,result){
			})
			res.sendFile(__dirname+'/public/login.html');
		})