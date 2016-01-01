angular.module('homeApp.main', [])

.controller('MainController', function ($scope, Quotes){
  $scope.zip = {};
  $scope.quoteData = {};
  $scope.weatherData = {};

  $scope.getZipCode = function () {
    Quotes.getZipCode()
    .then(function () {
      $scope.getWeather()
    })
  }

  $scope.getQuotes = function () {
    Quotes.getQuotes()
    .then(function (quoteData) {
      $scope.quoteData = quoteData;
    })
  }

  $scope.getWeather = function () {
    Quotes.getWeather()
    .then(function (weatherData) {
      var temp = weatherData.main.temp
      var city = weatherData.name
      var toFarenheith = ((temp - 273.15)*9/5)+32
      toFarenheith = toFarenheith.toFixed(0)
      $scope.weatherData.temp = toFarenheith;
      $scope.weatherData.city = city;
    })
  }

  $scope.getZipCode()
  $scope.getQuotes()
})
