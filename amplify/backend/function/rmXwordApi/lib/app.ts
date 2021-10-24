
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	AUTH_XWORDAMPLIFYWEBC2866CEA_USERPOOLID
	STORAGE_RMXWORDDB_NAME
	STORAGE_RMXWORDDB_ARN
	STORAGE_RMXWORDDB_STREAMARN
	MY_ENV_VAR
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.post('/pair-device', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/**********************
 * Example get method *
 **********************/
// app.get('/pair-device', function(req, res) {
//   // Add your code here
//   res.json({success: 'get call succeed!', url: req.url});
// });
/****************************
* Example delete method *
****************************/
// app.delete('/pair-device', function(req, res) {
//   // Add your code here
//   res.json({success: 'delete call succeed!', url: req.url});
// });

app.listen(3000, function() {
    console.log("App started")
});

export default app;
