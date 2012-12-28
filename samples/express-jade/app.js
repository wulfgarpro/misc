var express = require('express')
  , main = require('./main');

var app = express();

// configure express
app.configure(function() {
    app.use(express.bodyParser());
    // do some more config here
    app.use(express.static(__dirname + '/public'));
});

// default route
app.get('/', function(req, res) {
    res.render('welcome.jade');
});

// get *all* snippets route
app.get('/snippets', function(req, res) {
    var snippets = main.getSnippet();
    var output = 'There are no snippets.';
    
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
 * Route for POSTing a new snippet.
 */
app.post('/snippets', function(req, res) {
    console.log('/snippet called!');
    if(req.body) {
        main.addSnippet(req.body);
        res.send(200, 'Snippet successfully added...');
    } else {
        console.log('got nothing...');
    }

    res.send(400, 'Error adding snippet...');
});

app.listen(3000, function() { console.log('Listening on port 3000'); });
