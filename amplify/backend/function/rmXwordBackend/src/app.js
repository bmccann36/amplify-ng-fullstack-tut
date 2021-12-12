"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
if (!process.env.LAMBDA_RUNTIME_DIR) {
    console.log('** LAMBDA RUNTIME DIR UNDEFINED**');
    console.log('loading process.env from .env file');
    require('dotenv').config();
}
else {
    console.log('cloud env detected so not loading .env file');
}
var fetchUserInfo_1 = require("./service/fetchUserInfo");
var orchestrateDeviceSetup_1 = require("./service/orchestrateDeviceSetup");
var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());
// Enable CORS for all methods
app.use(function (request, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,POST,GET');
    //intercept the OPTIONS call so we don't double up on calls to the integration
    if ('OPTIONS' === request.method) {
        res.send(200);
    }
    else {
        next();
    }
});
// pair device path
app.post('/pair-device', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var cognitoSub, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('exec /pair-device with code: ', req.body.oneTimeCode);
                    cognitoSub = req.apiGateway.event.cognitoUserSub;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, orchestrateDeviceSetup_1["default"](req.body.oneTimeCode, cognitoSub)];
                case 2:
                    _a.sent();
                    res.json({
                        statusMessage: 'successfully paired device and created directory with sample file'
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
// get user info path
app.get('/user-info', function (req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var userSub, eventDefined, userData, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('exec /user-info');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    userSub = void 0;
                    eventDefined = !!((_a = req.apiGateway) === null || _a === void 0 ? void 0 : _a.event);
                    if (eventDefined) {
                        userSub = req.apiGateway.event.cognitoUserSub;
                    }
                    else {
                        userSub = process.env.COGNITO_TEST_USER_SUB;
                    }
                    return [4 /*yield*/, fetchUserInfo_1["default"](userSub)];
                case 2:
                    userData = _b.sent();
                    console.log('userData :>> ', userData);
                    res.json(userData);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    next(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
// error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ statusMessage: 'there was an error server side' });
});
app.listen(3000, function () {
    console.log("App started");
});
exports["default"] = app;
