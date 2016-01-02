angular.module('homeApp.main', [])

.controller('MainController', function ($scope, Quotes){
  $scope.zip = {};
  $scope.quoteData = {};
  $scope.weatherData = {};
  $scope.movieData = {};

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

  $scope.getMovies = function () {
    Quotes.getMovies()
    .then(function (movieData) {
      console.log("movieData.data: ", JSON.stringify(movieData.data, null, "\t"));
      if (movieData.data.Title) {
        $scope.movieData.title = movieData.data.Title;
      } else if (movieData.data.Response === "False") {
        $scope.movieData.title = "Jurassic Park";
      }
    })
  }

  $scope.getZipCode()
  $scope.getQuotes()
  $scope.getMovies()
})
