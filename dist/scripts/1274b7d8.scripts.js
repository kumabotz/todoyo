"use strict";angular.module("mytodoApp",["ui","LocalStorageModule"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mytodoApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("todos");a.todos=c&&c.split("\n")||[],a.$watch(function(){b.add("todos",a.todos.join("\n"))}),a.addTodo=function(){a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)}}]);