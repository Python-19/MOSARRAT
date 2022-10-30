
var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');

var db_host='localhost'
var db_name='Actors'
mongoose.connect('mongodb://'+db_host+'/'+db_name,{ useNewUrlParser: true });
 
var app = express();

// support parsing of application/json type post data
app.use(body_parser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(body_parser.urlencoded({ extended: true })); 

var Actors_Model = require('./models/Actors');


var server = app.listen(8080, function () {

console.log("Application Server Started listening requests");

});
app.post('/create_actors', function (req, res) {
 
		var user_obj = new Actors_Model(req.body);

		var return_arr={};
   		user_obj.save(function(err) {
	  	if (err) 	
	  	{   		
	   	    return_arr.status=0;
	   	    return_arr.message=err.message;
	   	}
	  	else
	  	{
	  		return_arr.status=1;
	   	    return_arr.message="Actors Created Successfully";
	  		 
	  	}
 
	  	res.json(return_arr);
	  	
	});


});


app.get('/get_all_actors', function (req, res) {

	  //select all records, just intantiate the modal with its name
 
		 
		Actors_Model.find({}, function(err, data) {
         
           var return_arr={};

            if (err) 	
		  	{   		
		   	    return_arr.status=0;
		   	    return_arr.message=err.message;
		   	}
		  	else
		  	{
		  		return_arr.status=1;
		   	    return_arr.actors=data;
		  		 
		  	}

	  		res.json(return_arr);
 

        });
 

});

app.put('/update_actors/:actors_id', function (req, res) {
 
		 
		var return_arr={};
   		Actors_Model.findByIdAndUpdate(req.params.actors_id,req.body,{new: true},function(err) {
	  	if (err) 	
	  	{   		
	   	    return_arr.status=0;
	   	    return_arr.message=err.message;
	   	}
	  	else
	  	{
	  		return_arr.status=1;
	   	    return_arr.message="Actors Updated Successfully";
	  		 
	  	}
 
	  	res.json(return_arr);
	  	
	});


});


app.delete('/delete_actors/:actors_id', function (req, res) {
 
		 
		var return_arr={};
   		Actors_Model.findByIdAndRemove(req.params.actorsr_id,function(err) {
	  	if (err) 	
	  	{   		
	   	    return_arr.status=0;
	   	    return_arr.message=err.message;
	   	}
	  	else
	  	{
	  		return_arr.status=1;
	   	    return_arr.message="Actors Deleted Successfully";
	  		 
	  	}
 
	  	res.json(return_arr);
	  	
	});


});





