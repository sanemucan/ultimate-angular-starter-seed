function TodoController() {
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
}

angular
  .module('app')
  .controller('TodocController', TodoController);
