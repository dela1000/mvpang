angular.module('homeApp.services', [])

.factory('Quotes', function ($http) {
  var Quotes = {};

  var zipCode;

  var getZipCode = function () {
    return $http({
      method: 'GET',
      url: 'http://ipinfo.io'
    })
    .then(function (response) {
      zipCode = response.data.postal
      urlWeatherRequest = 'http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',us&appid=2dbfcf67fd57090032db293a66c5ae52'
    })
  }

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

  var urlWeatherRequest

  var getWeather = function () {
    return $http({
      method: 'GET',
      url: urlWeatherRequest
    })
    .then(function (response) {
      return response.data
    })
  };

  return {
    getZipCode: getZipCode,
    getQuotes: getQuotes,
    getWeather: getWeather
  }
})
