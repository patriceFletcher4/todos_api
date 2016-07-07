var uuid = require('uuid');
//constructor function
//How do I build this object?
function Todo(description){
  this.id = uuid.v4();
  this.description = description;
  this.isComplete = false;
}

Todo.prototype.updateComplete = function(value){
  this.isComplete = value;
};


//sandbox
// var todo1 = new Todo('read my book');
// var todo2 = new Todo('practice programming');
// var todo3 = new Todo ('go running....')
// console.log(todo1, todo2, todo3);

module.exports = Todo
