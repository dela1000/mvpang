angular.module('homeApp.main', [])

.controller('MainController', function ($scope, Quotes){
  $scope.zip = {};
  $scope.quoteData = {};
  $scope.weatherData = {};
  $scope.movieData = {};
  $scope.imageData = {};

  $scope.getZipCode = function () {
    Quotes.getZipCode()
    .then(function (data) {
      $scope.weatherData.zip = data
      $scope.getWeather()
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

  $scope.getQuotes = function () {
    Quotes.getQuotes()
    .then(function (quoteData) {
      if (quoteData) {
        $scope.quoteData = quoteData;
      }else{
        $scope.quoteData.quote = "One can never know for sure what a deserted area looks like."
        $scope.quoteData.author = "George Carlin"
      };;
    })
  }

  $scope.getMovies = function () {
    Quotes.getMovies()
    .then(function (movieData) {
      if (movieData.data.Title) {
        $scope.movieData.title = movieData.data.Title;
      } else if (movieData.data.Response === "False") {
        $scope.movieData.title = "Jurassic Park";
      }
    })
    var movieClick = function () {
    movieData.data.Poster
    };
  }

  $scope.getImage = function () {
    Quotes.getImage()
    .then(function (imageData) {
      if (imageData.url) {
        $scope.imageData = imageData.url

      }else{
        $scope.imageData = "http://alikgriffin.com/sites/default/files/AlikGriffin_Santa_Monica_Pier_HDR_s.jpg"
      };
    })
  }

  $scope.getImage();
  $scope.getZipCode();
  $scope.getQuotes();
  $scope.getMovies();

})
