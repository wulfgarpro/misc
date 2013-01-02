var redis = require("redis"),
	client = redis.createClient();

/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res) {
	res.render('index', { title: 'About'});
};

exports.todo = function(req, res) {
	var todos = [];
	client.hgetall("Todo", function(err, objs) {
		for(var k in objs) {
			var newTodo =  {
				text: objs[k]
			};
			todos.push(newTodo);
		}

		res.render('todo', {
			title: 'New Todo List',
			todos: todos
		});
	})
}

exports.saveTodo = function(req, res) {
	var newTodo = {};
	newTodo.name = req.body['todo-text'];
	newTodo.id = newTodo.name.replace(" ", "-");
	client.hset("Todo", newTodo.id, newTodo.name);
	res.redirect("back");
}

/**
 * Snippet routes
 */ 
exports.snippet = function(request, response) {
    var snippets = [];
    client.hgetall("Snippet", function(err, objs) {
        for(var k in objs) {
            var newSnippet =  {
                description: objs[k]
            };
            snippets.push(newSnippet);
        }

        response.render('snippet', {
            title: 'Snippets',
            snippets: snippets
        });
    })
}

exports.createSnippet = function(request, response) {
    response.render('snippet_create', { title: 'Create Snippet' });    
}