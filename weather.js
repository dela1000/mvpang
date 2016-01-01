angular.module('homeApp.weather', [])

.controller('WeatherController', function ($scope, Quotes){
  $scope.data = {}
  $scope.getWeather = function () {
    Quotes.getWeather()
    .then(function (data) {
      $scope.data = data;
    })
  }
  $scope.getWeather()
})
