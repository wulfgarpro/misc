var constants = require('./constants');
var Snippet = require('./snippet').Snippet;

var store = {
	'snippets' : []
};

//////////////////////
//  PUBLIC METHODS  //
//////////////////////
exports.index = function() {
	return 'available routes:<br/>GET /snippet<br/>PUT /snippet';
};

/**
 * Initialises sample data on startup
 */
exports.init = function() {
	this.addSnippet(new Snippet(null, "some code", constants.language.JAVA, "java,test"));
	this.addSnippet(new Snippet("for loop", "this could be a for loop", constants.language.JS, 'javascript,loop'));
};

exports.addSnippet = function(content) {
	store.snippets.push(content);
};

exports.getAllSnippets = function() {
	return store.snippets;
};

exports.format = function(s) {
	return '<li>'+s.toHtmlString()+'</li>';
}

exports.parseSnippet = function(content) {
	if(content) {
		//validate the snippet
		if(content.code) {
			var s = new Snippet(
				content.title ? content.title : null, 
				content.code, 
				constants.language.JS, //default for now 
				content.tags ? content.tags : null
			);
			this.addSnippet(s);
			console.log('snippet added');
		}
		else {
			console.log('unable to add snippet');
		}
	}
}