var CONSTANTS = require('../../constants.js'), 
    Snippet = require('../../snippet');

module.exports.javaSnippet = new Snippet(
        'Java Snippet',
        CONSTANTS.language.JAVA,
        'System.out.println("Hello World!");',
        'java system byte-stream stdout');
