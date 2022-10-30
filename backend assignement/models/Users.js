 
		var mongoose = require('mongoose');

 		//code will come here to insert actors in mongo database
	  	var Schema = mongoose.Schema;
		// create a schema
		var UserSchema = new Schema({
			name: { type: String, required: true },
			//img: { type: sting, required: true },
			summary: { type: String, required: true },
		  
		});

		// the schema is useless so far ,we need to create a model using it
	module.exports = mongoose.model('Users', UserSchema)