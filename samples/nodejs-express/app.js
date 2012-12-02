var express = require('express');
var snippet = require('./snippet.js');
var app = express();

// default route
app.get('/', function(req, res){
	res.send(snippet.index());
});

// get all snippets route
app.get('/snippet', function(req, res){
	var sArr = snippet.getAllSnippets();
	var output = 'No snippets added yet.';
	if(sArr && sArr.length > 0) {
		output = '<ul>';
		for (var i = sArr.length - 1; i >= 0; i--) {
			output += snippet.format(sArr[i]);
		};
		output += '</ul>';
	}
  res.send(output);
});

// put new snippet route
app.put('/snippet', function(req, res){
	snippet.addSnippet(req.body);
  	res.send('function not yet available');
});



app.listen(3000);
console.log('node-express listening on port 3000');