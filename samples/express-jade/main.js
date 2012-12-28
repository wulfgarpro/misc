// modules
var cache = require('memory-cache'), 
    fs = require('fs'),
    constants = require('./constants'),
    Snippet = require('./snippet');

var STORE_DIR = 'data';

/*
 * Persists a code snippet as JSON to disk, and caches it.
 */
exports._persistSnippet = function(snippet) {
    // persist! 
    var name;
    if(snippet.name) {
        name = snippet.name;
    } else {
        snippet.name = this._getRandomFileName();
        name = snippet.name;
    }

    fs.writeFile(STORE_DIR + '/' + name + '.json', JSON.stringify(snippet), function(err) {
        // something bad happened
        if (err) throw err; 
    });
        
    return name;
}

exports._cacheSnippet = function(snippet) {
    cache.put(snippet.name, snippet, 2000); // 2 seconds
}

/*
 * Helper to generate a random name. 
 */
exports._getRandomFileName = function() {
    var num = Math.random() * 10000;
    return String(num).replace('.', '');
}

/**
 * Store a snippet.
 */
exports.addSnippet = function(snippet) {
    return this._persistSnippet(snippet);
};

/**
 * Retrieve all snippets.
 */
exports.getSnippet = function() {
    var snippets = [];
    
    /*fs.readdir(STORE_DIR + '/', function(err, files) {
        if(err) throw err;
        for(var file in files) {
            fs.readFile(file, function(err, data) {
                if(err) throw err;
                console.log(data); // this is where we should do our JSON.parse
            });
        }
    });*/
    return snippets;
};

/**
 * Retrieves a named snippet.
 */
exports.getSnippet = function(name) {
    var snippet = cache.get(name);
    if(snippet) {
        return snippet;
    } else {
        // find on disk and construct
    }
};

/**
 * Removes a named snippet.
 */
exports.removeSnippet = function(name) {
    return true;    
};
