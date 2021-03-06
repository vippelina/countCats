//***************************************************
// Fetching modules
//***************************************************
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 

app.set('port', (process.env.PORT || 5001));

//***************************************************
// Middleware
//***************************************************
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 
//----------------------------------------
//Start server
//----------------------------------------
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});