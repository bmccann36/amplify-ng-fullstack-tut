
require('dotenv').config()
import * as awsServerlessExpress from 'aws-serverless-express';
import app from './app';
import jwt_decode from "jwt-decode";



const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  if (!process.env.IS_LOCAL) {
    console.log(`EVENT:\n ${JSON.stringify(event)}\n`);
  }
  // append user sub to apig event
  var decodedAccessToken: any = jwt_decode(event.headers['cognito-access-token']);
  event.cognitoUserSub = decodedAccessToken.sub

  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
