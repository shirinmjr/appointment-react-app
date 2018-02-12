
require('dotenv').config();
var PORT = 80;


var express = require('express');
var app = express();

app.listen(PORT, function() {
	console.log('Server is up and running on port 3000');
});

app.get('/', function(request, response){
	response.send('Hello World');
});