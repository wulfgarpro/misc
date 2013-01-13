
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/users', user.list);
app.get('/todo', routes.todo);
app.post('/save', routes.saveTodo);


//snippet REST routes
app.get('/snippet', routes.snippet);
app.get('/snippet/:id', routes.editSnippet);
app.get('/snippet/create', routes.createSnippet);
app.post('/snippet', routes.saveSnippet);
app.put('/snippet/:id', routes.updateSnippet);
app.delete('/snippet/:id', routes.deleteSnippet);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
