var http = require('http');

var hostname = 'localhost',
    port = 80;

// how do we define a snippet?
var snippet = {
    syntax: "bash",
    code: "echo !!"
};

(function() {
    console.log("Client called!");
    
    var options = {
        hostname: "localhost",
        port: "80",
        path: "/snippets",
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    };

    var req = http.request(options, function(res) {
        console.log("PUTing a snippet");
        res.on('data', function(chunk) {
            console.log(res.statusCode + " - " + chunk);
        });
    });

    req.write(JSON.stringify(snippet));
    req.end
})();
