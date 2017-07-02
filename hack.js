	const express = require('express')
	const app = express()
	app.use(express.static("public"));
	var Datastore = require('nedb')
    var db = new Datastore({filename:'data.db',autoload:true});
    app.set("port",process.env.PORT||7000)
 	app.set('view engine','ejs');
 	app.get("/home",function(req,res){
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
		});	
 	app.get("/loginsubmit",function(req,res)
		{
			var pas=req.query.password;
			var em=req.query.email;	
			var person={
				"password":pas,
				"email":em
			}	
			var per={}
			db.find(person,function(err,result){

    		if(result.length!=0)
    		{
    			db.find(per,function(err1,res1){res.render("home",{result:res1})})
    			
    		}
    		else
    			res.send("No user found")
    	})	