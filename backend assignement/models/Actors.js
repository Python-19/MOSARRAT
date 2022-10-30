 
		var mongoose = require('mongoose');

 		//code will come here to insert Actors in mongo database
	  	var Schema = mongoose.Schema;
		// create a schema
		var ActorsSchema = new Schema({
			name: { type: String, required: true },
			//img: { type: string, required: true },
			summary: { type: String, required: true },
		  
		});

		
	module.exports = mongoose.model('Actors', ActorsSchema)