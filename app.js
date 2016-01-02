angular.module('homeApp', [
  'homeApp.services',
  'homeApp.main',
  'ngRoute'
  ])
.config(function($routeProvider) {
  var MainController = 'MainController';
  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: MainController,
    resolve: MainController.resolve
  })
})
