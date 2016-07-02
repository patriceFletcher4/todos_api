var express = require('express');
var bodyParser = require('body-Parser');
var lowdb = require('lowdb');
var uuid = require('uuid');
var server = express();

var port = process.env.port || 8080;
var db = lowdb('db.json');

//database initialization
db.defaults({todos: []})
  .value(); //runs the previous sets of commands

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/todos', function(request, response){
var todos = db.get('todos')
              .value()
  response.send('todos');
});

server.get('/todos/:id', function(request, response){
  response.send('GET todos :id');
})

server.post('/todos', function(request, response){
  var todo = {
    id: uuid.v4(),
    description: request.body.description,
    isComplete: false
  };

  var result = db.get('todos')
                 .push(todo)
                 .last()
                 .value();
  response.send(result);
});

server.put('/todos/:id', function(request, response){
  response.send('PUT todos :id');
})

server.delete('/todos/:id', function(request, response){
  response.send('DELETE todos :id');
})

server.listen(port, function(){
  console.log('Now listening on port ' +port);
});
