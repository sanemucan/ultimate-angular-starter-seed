function TodoController() {
  this.newTodo = '';
  this.list = [{
    title: 'First todo Item',
    completed: false
  },{
    title: 'Second todo Item',
    completed: true
  },{
    title: 'Third todo Item',
    completed: false
  }];
  this.addTodo = function () {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    });
    this.newTodo = '';
  };
  this.removeTodo = function(item, index){
    this.list.splice(index,1);
  }
}

angular
  .module('app')
  .controller('TodocController', TodoController);
