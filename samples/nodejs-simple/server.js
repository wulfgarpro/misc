/*
 * A simple nodejs application showing basic PUT/GET 
 * functionality without any non conventional modules.
 */

var http = require('http');
var url  = require('url');
var fs   = require('fs');

var host = 'localhost', 
    port = 80;

var store = 'data';

// mimic me a client
var client = require('./client.js');

http.Server(function(req, res) {
    var respond = function(answer) {
        res.writeHead(answer.code);
        res.end(answer.msg);
    };

    var snippet;
    if((snippet = url.parse(req.url,true).query.snippet)) {
        persistSnippet(snippet, respond);
    } else {
        res.end();
    }    
}).listen(port, host);
console.log('Server launched ' + host + ':' + port);

/*
 * Persists a code snippet as JSON.
 */
function persistSnippet(snippet, respond) {
    // persist! 
    var name = getRandomFileName();
    fs.writeFile(store + '/' + name, snippet, function(err) {
        if(err) throw err;
        respond(resFactory(200, 'Successfully saved snippet to codr.\n' + 'File name: ' + name));
    });
}

/*
 * Quick helper.
 */
function getRandomFileName() {
    var num = Math.random() * 10000;
    return String(num).replace('.','');
}

/*
 * Constructs a HTTP server response.
 */
function resFactory(code, msg) {
    return {
        'code': code,
        'msg': msg
    };
}

