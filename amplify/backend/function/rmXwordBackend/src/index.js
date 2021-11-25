"use strict";
exports.__esModule = true;
require('dotenv').config();
var awsServerlessExpress = require("aws-serverless-express");
var app_1 = require("./app");
var jwt_decode_1 = require("jwt-decode");
var server = awsServerlessExpress.createServer(app_1["default"]);
exports.handler = function (event, context) {
    if (!process.env.IS_LOCAL) {
        console.log("EVENT:\n " + JSON.stringify(event) + "\n");
    }
    // append user sub to apig event
    try {
        var decodedAccessToken = jwt_decode_1["default"](event.headers['cognito-access-token']);
        event.cognitoUserSub = decodedAccessToken.sub;
    }
    catch (err) {
        console.error('failed to parse cognito-access-token header');
        console.error(err);
    }
    return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
