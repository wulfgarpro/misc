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

exports.saveSnippet = function(req, res) {
    var newSnippet = {};
    newSnippet.title = req.body['snippet-title'];
    newSnippet.code = req.body['snippet-code'];
    newSnippet.id = newSnippet.title.replace(" ", "-");
    client.hset("Snippet", newSnippet.id, JSON.stringify(newSnippet));
    res.redirect("/snippet");
}

/**
 * Snippet routes
 */ 
exports.snippet = function(request, response) {
    var snippets = [];
    client.hgetall("Snippet", function(err, objs) {
        for(var k in objs) {
            var json = JSON.parse(objs[k]);
            snippets.push(json);
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

exports.editSnippet = function(request, response) {
    client.hget("Snippet", request.params.id, function(err, obj) {
        if(obj) {
            var json = JSON.parse(obj);

            response.render('snippet_edit', { 
               title: 'Edit Snippet',
                snippet: json
            });  
        }
        else {
            response.render('snippet_error', { title: 'Unable to load snippet' });       
        }
    });
}

exports.deleteSnippet = function(request, response) {
    if(request.params.id) {
        client.hdel("Snippet", request.params.id, function(err, obj) {
            if(!err) {
                console.log('Deleted ' + request.params.id + ' from the datastore');        
                response.send(200);
            } else {
                response.send(500, { error: 'an error occured deleting from the datastore'});
            }
            
        });
    }
    else {
        response.send(500, { error: 'id not found'});
    }
}