angular.module('homeApp.services', [])

.factory('Main', function ($http) {
  var Main = {};

  var zipCode;
  var zipKey = '2dbfcf67fd57090032db293a66c5ae52'

  var getZipCode = function () {
    return $http({
      method: 'GET',
      url: 'http://ipinfo.io'
    })
    .then(function (response) {
      zipCode = response.data.postal
      urlWeatherRequest = 'http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&appid='+zipKey+''
      return zipCode
    })
  }

  //Had to all the callback to get over the "uncaught error :" problem caused by JSONP
  var movieAPIkey = 'ny97sdcpqetasj8a4v2na8va'

  var getMovies = function () {
    return  $http({
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey='+movieAPIkey+'&callback=JSON_CALLBACK',
      jsonp: 'callback',
      method: 'JSONP'
    })
    .success(function(response) {
      return response
    });
  };

  var getQuotes = function () {
    return $http({
      method: 'GET',
      url: 'http://api.theysaidso.com/qod'
    })
    .then(function (response) {
      return response.data.contents.quotes[0]
    })
  };

  //http://openweathermap.org/current for info.

  var urlWeatherRequest;

  var getWeather = function () {
    return $http({
      method: 'GET',
      url: urlWeatherRequest
    })
    .then(function (response) {
      return response.data
    })
  };

  var apodKey = '1qi6sjylF9PYuAyEziSc2snDjLJxJs9YnLgldJQY';

  var getImage = function () {
    return $http({
      method: 'GET',
      url: 'https://api.nasa.gov/planetary/apod?api_key='+apodKey+''
    })
    .then(function (response) {
      return response.data
    })
  }

  return {
    getImage: getImage,
    getZipCode: getZipCode,
    getQuotes: getQuotes,
    getWeather: getWeather,
    getMovies: getMovies
  }
})
