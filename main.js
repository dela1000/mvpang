angular.module('homeApp.main', [])

.controller('MainController', function ($scope, Main){
  $scope.zip = {};
  $scope.quoteData = {};
  $scope.weatherData = {};
  $scope.movieData = {};
  $scope.imageData = {};

  $scope.getZipCode = function () {
    Main.getZipCode()
    .then(function (data) {
      $scope.weatherData.zip = data
      $scope.getWeather()
    })
  }

  $scope.getWeather = function () {
    Main.getWeather()
    .then(function (weatherData) {
      var temp = weatherData.main.temp
      var city = weatherData.name
      var toFarenheith = ((temp - 273.15)*9/5)+32
      toFarenheith = toFarenheith.toFixed(0)
      $scope.weatherData.temp = toFarenheith;
      $scope.weatherData.city = city;
    })
  }

  $scope.getQuotes = function () {
    Main.getQuotes()
    .then(function (quoteData) {
      if (quoteData) {
        $scope.quoteData = quoteData;
      }else{
        $scope.quoteData.quote = "'Meow' means “woof” in cat."
        $scope.quoteData.author = "George Carlin"
      };;
    })
  }

  $scope.getMovies = function () {
    Main.getMovies()
    .then(function (movieData) {
      for (var i = 0; i < movieData.data.movies.length; i++) {
        $scope.movieData[movieData.data.movies[i].title] = {
          title: movieData.data.movies[i].title,
          release: movieData.data.movies[i].release_dates.theater,
          poster: movieData.data.movies[i].posters.thumbnail,
          link: movieData.data.movies[i].links.alternate,
          synopsis: movieData.data.movies[i].synopsis
        }
      };
    })
  }

  $scope.getImage = function () {
    Main.getImage()
    .then(function (imageData) {
      if (imageData.url) {
        $scope.imageData.url = imageData.url
        $scope.imageData.title = imageData.title
        $scope.imageData.explanation = imageData.explanation
      }else{
        $scope.imageData.url = "smp.jpg"

      };
      $scope.getZipCode(); // These are here so they are called
      $scope.getQuotes();  // after the background image has
      $scope.getMovies();  // loaded
    })
  }

  $scope.getImage(); // first API call
})
