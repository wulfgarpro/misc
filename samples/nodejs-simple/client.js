// modules
var http = require('http');

// a Snippet
var Snippet = require('./snippet');

var HOST_NAME = 'localhost',
    PORT = 80;

(function() {
    console.log('Client called!');
    
    var options = {
        hostname: 'localhost',
        port: '80',
        path: '/snippets',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var req = http.request(options, function(res) {
        console.log('PUTing a snippet');
        res.on('data', function(chunk) {
            console.log(res.statusCode + ' - ' + chunk);
        });
    });

    req.write(JSON.stringify(new Snippet('bash', 'echo !!')));
    req.end
})();
