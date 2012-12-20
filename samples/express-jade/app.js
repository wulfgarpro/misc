var express = require('express')
  , main = require('./main');

var app = express();

// configure express
app.configure(function() {
    app.use(express.bodyParser());
    // do some more config here
});

// default route
app.get('/', function(req, res) {
    // do some rendering here with jade
    res.send('loaded...');
});

// get *all* snippets route
app.get('/snippets', function(req, res) {
    var snippets = main.getSnippets();
    var output = 'No snippets added yet.';
    
    if(snippets && snippets.length > 0) {
        output = '<ul>';
        for (var i = snippets.length - 1; i >= 0; i--) {
            // output += main.format(snippets[i]);
            console(i + ' snippet would have been rendered');
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
app.put('/snippet', function(req, res) {
    if(req.body) {
        main.parseSnippet(req.body);
        res.send(200, 'Snippet successfully added...');
    } else {
        console.log('got nothing...');
    }

    res.send(400, 'Error adding snippet...');
});

app.listen(3000, function() { console.log('Listening on port 3000') });
