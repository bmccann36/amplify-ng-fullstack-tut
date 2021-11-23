
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

import fetchUserInfo from "./service/fetchUserInfo";
import orchestrateDeviceSetup from "./service/orchestrateDeviceSetup"

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// why doesn't this work?
// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// pair device path
app.post('/pair-device', async function (req, res, next) {
  console.log('exec /pair-device with code: ', req.body.oneTimeCode);
  const cognitoSub = req.apiGateway.event.cognitoUserSub
  try {
    await orchestrateDeviceSetup(req.body.oneTimeCode, cognitoSub)
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
  let userSub: string;
  const eventDefined: boolean = !!req.apiGateway?.event;
  if (eventDefined) {
    userSub = req.apiGateway.event.cognitoUserSub
  } else {
    userSub = process.env.COGNITO_TEST_USER_SUB
  }
  const userData = await fetchUserInfo(userSub);
  console.log('userData :>> ', userData);
  try {
    res.json(userData)
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
