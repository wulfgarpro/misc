var store = {
	'snippets' : ['test snippet 1', 'test snippet 2']
};


//////////////////////
//  PUBLIC METHODS  //
//////////////////////
exports.index = function() {
	return 'available routes:<br/>GET /snippet<br/>PUT /snippet';
};

exports.addSnippet = function(content) {
	if(content) {
		store.snippets.push(content);	
	}
};

exports.getAllSnippets = function() {
	return store.snippets;
};

exports.format = function(snippet) {
	return '<li>'+snippet+'</li>';
}