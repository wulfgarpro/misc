/*
 * A simple nodejs application showing basic PUT/GET 
 * functionality without any unconventional modules.
 */

// modules
var http = require('http');
var url  = require('url');
var fs   = require('fs');

// a Snippet
var Snippet = require('./snippet.js');

var HOST_NAME = 'localhost', 
    PORT = 80;

var STORE_DIR = 'data';

http.Server(function(req, res) {
    req.on('data', function(chunk) {
        console.log('SERVER: ' + chunk);
        chunk = JSON.parse(chunk);

        // build a Snippet from a PUT
        var snippet = new Snippet(chunk.syntax, chunk.code);
         
        try {
            persistSnippet(snippet, function(name) {
                res.writeHead(200);
                res.end('Successfully saved snippet to codr. \n' + 'File name: ' + name);
            });
        } catch (err) {
            res.writeHead(503);
            res.end('An error occured fulfilling your request. \n' + err.message);
        }
    });
}).listen(PORT, HOST_NAME);
console.log('Server launched ' + HOST_NAME + ':' + PORT);

/*
 * Persists a code snippet as JSON.
 */
function persistSnippet(snippet, res) {
    if (!(snippet.syntax) || !(snippet.code)) {
        throw new Error('Your Snippet is malformed. Please supply a syntax and code parameter.');
    }

    // persist! 
    var name = getRandomFileName();
    fs.writeFile(STORE_DIR + '/' + name + '.json', JSON.stringify(snippet), function(err) {
        // something bad happened
        if (err) {
            throw err;
        }
        res(name);
    });
}

/*
 * Helper to generate a random name. 
 */
function getRandomFileName() {
    var num = Math.random() * 10000;
    return String(num).replace('.','');
}

