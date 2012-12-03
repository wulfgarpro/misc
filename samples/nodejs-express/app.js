var express = require('express');
var main = require('./main');
var app = express();

// default route
app.get('/', function(req, res){
	res.send(main.index());
});

// get all snippets route
app.get('/snippet', function(req, res){
	var sArr = main.getAllSnippets();
	var output = 'No snippets added yet.';
	if(sArr && sArr.length > 0) {
		output = '<ul>';
		for (var i = sArr.length - 1; i >= 0; i--) {
			output += main.format(sArr[i]);
		};
		output += '</ul>';
	}
  res.send(output);
});

// post new snippet route
app.post('/snippet', function(req, res){
	console.log(req.param('title'));
	if(req.body) {
		console.log('recieved request to add ' + req.body.snippet);
	} else {
		console.log('got nothin');
	}
	console.log(req.param('snippet'))
	main.parseSnippet(req.body);
  	res.send('function not yet available');
});


main.init();
app.listen(3000);
console.log('node-express listening on port 3000');