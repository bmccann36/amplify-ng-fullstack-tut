const awsServerlessExpress = require('aws-serverless-express');
import app from './app';

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT:\n ${JSON.stringify(event)}\n`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
