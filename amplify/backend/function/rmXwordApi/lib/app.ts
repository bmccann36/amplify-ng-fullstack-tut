
/* Amplify Params - DO NOT EDIT
  AUTH_XWORDAMPLIFYWEBC2866CEA_USERPOOLID
  ENV
  REGION
  STORAGE_PUZZLEBUCKET_BUCKETNAME
  STORAGE_RMXWORDDB_ARN
  STORAGE_RMXWORDDB_NAME
  STORAGE_RMXWORDDB_STREAMARN
  MY_ENV_VAR
Amplify Params - DO NOT EDIT */

if (!process.env.LAMBDA_RUNTIME_DIR) {
  console.log('** LAMBDA RUNTIME DIR UNDEFINED**');
  console.log('loading process.env from .env file');
  require('dotenv').config()
} else {
  console.log('cloud env detected so not loading .env file');
}

import orchestrateDeviceSetup from "./service/orchestrateDeviceSetup"

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// pair device path
app.post('/pair-device', async function (req, res, next) {
  console.log('exec /pair-device with code: ', req.body.oneTimeCode);
  const cognitoStr =
    req.apiGateway.event.requestContext.identity.cognitoAuthenticationProvider;
  console.log("authorizer INFO ****");
  const cognitoSub = cognitoStr.split(':')[2];
  try {
    await orchestrateDeviceSetup(req.body.oneTimeCode, cognitoSub) //    patch in cognito user id
    res.json({
      statusMessage: 'successfully paired device and created directory with sample file',
    })
  } catch (error) {
    next(error)
  }
});

// get user info path
app.get('/user-info', async function (req, res, next) {
  console.log('exec /user-info');
  try {
    const cognitoStr =
      req.apiGateway.event.requestContext.identity.cognitoAuthenticationProvider;
    const cognitoSub = cognitoStr.split(':')[2];
    console.log('cognitoSub :>> ', cognitoSub);
    res.send('ur done')
  } catch (err) {
    next(err)
  }

})

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(
    { statusMessage: 'there was an error server side' }
  )
})

app.listen(3000, function () {
  console.log("App started")
});

export default app;
