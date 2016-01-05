var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
//need to npm install all the above

var app = express();

//middleware
app.use(cors())
app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

//our lonely route for our single page app
app.get('/', function(req, res) {
  res.sendFile(__dirname + 'index.html');
});

var server = require('http').createServer(app)
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
