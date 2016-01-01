angular.module('homeApp', [
  'homeApp.services',
  'homeApp.main',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: 'MainController'
  })
})
