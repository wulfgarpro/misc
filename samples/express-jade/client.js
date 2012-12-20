// modules
var http = require('http');

// a Snippet
var Snippet = require('./snippet');

var HOST_NAME = 'localhost',
    PORT = 3000;

(function() {
    console.log('Client called!');
    
    var options = {
        "hostname": HOST_NAME,
        "port": PORT,
        "path": '/snippet',
        "method": 'PUT',
        "headers": {
            "Content-Type": "application/json"
        }
    };

    var req = http.request(options, function(res) {
        console.log('PUTing a snippet');
        res.on('data', function(chunk) {
            console.log(res.statusCode + ' - ' + chunk);
        });
    });

    req.write(JSON.stringify(new Snippet('', '', 'bash', 'echo !!', '', '')));
    req.end
})();
