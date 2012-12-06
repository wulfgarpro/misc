var express = require('express');
var main = require('./main');
var app = express();

app.use(express.bodyParser());

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

/**
 * <p>Route for PUTting a new snippet.</p>
 * <p>Expects a JSON object of the form:</p>
 * <pre>
 * {
 *   "code":"the snippet code"
 * }
 * </pre>
 *
 * @return 200 OK if snippet was added, 400 Bad Request otherwise
 */
app.put('/snippet', function(req, res){
	
	if(req.body) {
		main.parseSnippet(req.body);
		res.send(200, 'snippet added');
	} else {
		console.log('got nothin');
	}
	
  	res.send(400, 'error adding snippet');
});


main.init();
app.listen(3000);
console.log('node-express listening on port 3000');