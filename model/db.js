var mongoose = require('mongoose'),
	database	 = 'mongodb://localhost:27017/customerdb'
	
mongoose.connect(database , { useNewUrlParser: true });
mongoose.connection.on('connected' , () =>{
	console.log('connected')
});

require('./customer');
