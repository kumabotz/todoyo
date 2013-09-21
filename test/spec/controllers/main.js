'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of Todo items to the scope', function () {
    expect(scope.todos.length).toBe(0);
    scope.addTodo('Item 1');
    scope.addTodo('Item 2');
    scope.addTodo('Item 3');
    expect(scope.todos.length).toBe(3);
  });
});
