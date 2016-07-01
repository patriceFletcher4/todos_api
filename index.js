var express = require('express');
var server = express();

var port = process.env.port || 8080;


server.get('/todos/:id', function(request, response){
  response.send('GET todos');

});

server.get('/todos/:id', function(request, response){
  response.send('GET todos :id');
})

server.post('/todos/', function(request, response){
  response.send('POST todos :id');
})

server.put('/todos/:id', function(request, response){
  response.send('PUT todos :id');
})

server.delete('/todos/:id', function(request, response){
  response.send('DELETE todos :id');
})

server.listen(port, function(){
  console.log('Now listening on port ' +port);
});
