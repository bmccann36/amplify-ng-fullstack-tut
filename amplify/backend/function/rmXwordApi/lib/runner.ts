
import * as index from './index'

const lambdaEntryPoint: any = index;
lambdaEntryPoint.handler(userInfoEvent(), {})


function userInfoEvent() {
  return {
    "resource": "/user-info",
    "path": "/user-info",
    "httpMethod": "GET",
    "headers": {
      "Accept": "application/json",
      "CloudFront-Forwarded-Proto": "https",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-Mobile-Viewer": "false",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Tablet-Viewer": "false",
      "CloudFront-Viewer-Country": "US",
      "cognito-access-token": "eyJraWQiOiJXcW5QdzNGbHBvelNTbHVyYXBkcU5EM1JEdDFuN1lnbzl6Z1dEb0piemdRPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzY1OGI2NjMtM2Y0MC00MjY5LTliN2QtYjUzMTUxMDVhMWUyIiwic3ViIjoiZWQ2ZTA5MjUtYTliYy00NTMzLWEzMGEtMWM4YzJhMmYwOGJhIiwiZXZlbnRfaWQiOiJhY2YzMjMzYS1iOWY3LTRkNGYtYjhiYS1mZGExYjVlYzBhN2QiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjM3NDUyMzY5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV82d3Roc25WQ04iLCJleHAiOjE2Mzc0NTU5NjksImlhdCI6MTYzNzQ1MjM2OSwianRpIjoiOWE4ZDdjYzUtZGMwZS00ZTY2LTk0MTItNWMwZjI2OGQ3NjYwIiwiY2xpZW50X2lkIjoiMjI0ZHVvdWI3OHUxajBtcmdnMWc4dWphOXMiLCJ1c2VybmFtZSI6ImVkNmUwOTI1LWE5YmMtNDUzMy1hMzBhLTFjOGMyYTJmMDhiYSJ9.igGVl5za7Z8otmkMUdbS0t8yDg5lMcZ0A8SfBmlx1R4Cr-fHfaxEiAnnuL7RDi5fsw6lbMOkQeZeLDAzThSmvnYLZpcqCWZ1elRnJPYYaCHS4pkhgzuT3rIQ4Rmrwy7dsYvDNPiU6hOpLGkJEMj7piru3iQAJQe2qG1rUvDX7n1OdTQ7-WyjJPCNxofj0nlFjIidHPiiF_e2R2s5rhwUHdCvLxIAbfqgCFNKBIBwvwzlpqcvIUSxzb-Q8hObXXpEvzKZTbQ4UP4EynP4I8vMVDcNVobEck-TAW8p6P3KGMQzgZkFR-7lznasGnxbfZISQoOyeaJYaMETN3aLJDQTIA",
      "Content-Type": "application/json",
      "Host": "upfskw5v3h.execute-api.us-east-1.amazonaws.com",
      "User-Agent": "axios/0.18.1",
      "Via": "1.1 442b92844f344782438a7e0f5132c125.cloudfront.net (CloudFront)",
      "X-Amz-Cf-Id": "4r-PnvcpWPyFV_uwDM8DhXtmPx3kZq1bSx-TdUXI46jW9_xNFqdtgg==",
      "x-amz-date": "20211120T235249Z",
      "x-amz-security-token": "IQoJb3JpZ2luX2VjEEAaCXVzLWVhc3QtMSJHMEUCIDGAf/LuefpV4GUv3kCTz+aA2T8NzTtzXJd8wzNh3qikAiEAwEtnJ+90UYgY6rqDtWYrTSmQiE463lDN2lAHuJ8gICoqzQQI+f//////////ARADGgw0NjYzNTc3MDkzNDYiDLPQEMi1o2Us8u5zOSqhBGWzUX8MZgHm9Dpk8hSZWIRAXIWVrvxkDBcdNgXwi5bhqr6zwkU4C78KxCLFi3boIOvnNIO0DM7uS66BvJGab7MEbOcV1+nl9s6pfv3tMS0WvAi3nU41Zfwg6//fq6LWsTi+gdIvyrFsC7aj0II5GEEL03GteCX50nfgjqg7yoSBHl9/5qjI7ov6TKnO88ZCGHjfDvCNvKKYkSWXKeo0cdzQjgxaZvDpmDc49/FqUET98uqQpRYh56AV7JU16bCpBbh1Vwu13ZewG6p25qgtPHNvpWbXOsZAMjFVRXMA7NmpLeIVIAkbH8/t9bVwfLicJ0HHkjD+ol10RCOYD3ASQsq2648AAt5rcyM3z+4qZYJKjEohIK/I+py7ZNvat7RyQgY3gjSgeCa8Y7+5sM1VC9QijgTQAtIRyE5Xr0W+eHo77sqZdQRygPBwIL1FZ2LI/HxwVrFpggIlwBwACTIYxBQv7ghuYUJ2Qdw4dz5Ktyp/MdJd2rMYSWcl7evoXff0HYBocyn8LaT+6UE3UQHaLVLk8EJgSYSf2TdA+JI4SxHDR4iHbCKGVgbct/t+cdxH9gqvBFaOWOZa4qDvlq1yOl82z8zHONMHnkH1wyYhEgrf+w/ByBSxURb+Hmf3eJz2wmhLSlG/g8xocsbC8cmJaeAM+NryklsoMQlYdiQfyrQ0gPMlAWTs67LS6/lybzqjvBLMYref7JqPxO+LrS72mOg4MNGU5owGOoUC37guTQxO2Y/19c1ddx06uIdTA9cqog7nDPmEIQYjyKNbDnnk50nu884AWr6dHz2QWKNZTn40RV595NqNg2vk6RRY1CzfpE/Utp0q/MV+BFootLv9OKx4eMq2cr3PtFYYyeKLYYpFPi1dEoQ8MrQaRiblkOpSpDK0jO+ud1paB+xjGW6nfgKbwVRHswCfP2hk0FutbMUhJMnOx/Ob8wFLwRhHvRH997vG0EyAD+iev5Zv9UUZlkP//FI8VlsFll2Vh6u1I2bw2rG7w6WTnRMglglWIFGDtliU2WYRiDh53sZ7bBsMI9vFfbCufQkAQDm8IygqmJInCBWP60s3+9HShyee6AZo",
      "X-Amzn-Trace-Id": "Root=1-61998a52-185a88920807656121c3a4f2",
      "X-Forwarded-For": "74.101.16.22, 130.176.10.101",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
      "Accept": [
        "application/json"
      ],
      "CloudFront-Forwarded-Proto": [
        "https"
      ],
      "CloudFront-Is-Desktop-Viewer": [
        "true"
      ],
      "CloudFront-Is-Mobile-Viewer": [
        "false"
      ],
      "CloudFront-Is-SmartTV-Viewer": [
        "false"
      ],
      "CloudFront-Is-Tablet-Viewer": [
        "false"
      ],
      "CloudFront-Viewer-Country": [
        "US"
      ],
      "cognito-access-token": [
        "eyJraWQiOiJXcW5QdzNGbHBvelNTbHVyYXBkcU5EM1JEdDFuN1lnbzl6Z1dEb0piemdRPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzY1OGI2NjMtM2Y0MC00MjY5LTliN2QtYjUzMTUxMDVhMWUyIiwic3ViIjoiZWQ2ZTA5MjUtYTliYy00NTMzLWEzMGEtMWM4YzJhMmYwOGJhIiwiZXZlbnRfaWQiOiJhY2YzMjMzYS1iOWY3LTRkNGYtYjhiYS1mZGExYjVlYzBhN2QiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjM3NDUyMzY5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV82d3Roc25WQ04iLCJleHAiOjE2Mzc0NTU5NjksImlhdCI6MTYzNzQ1MjM2OSwianRpIjoiOWE4ZDdjYzUtZGMwZS00ZTY2LTk0MTItNWMwZjI2OGQ3NjYwIiwiY2xpZW50X2lkIjoiMjI0ZHVvdWI3OHUxajBtcmdnMWc4dWphOXMiLCJ1c2VybmFtZSI6ImVkNmUwOTI1LWE5YmMtNDUzMy1hMzBhLTFjOGMyYTJmMDhiYSJ9.igGVl5za7Z8otmkMUdbS0t8yDg5lMcZ0A8SfBmlx1R4Cr-fHfaxEiAnnuL7RDi5fsw6lbMOkQeZeLDAzThSmvnYLZpcqCWZ1elRnJPYYaCHS4pkhgzuT3rIQ4Rmrwy7dsYvDNPiU6hOpLGkJEMj7piru3iQAJQe2qG1rUvDX7n1OdTQ7-WyjJPCNxofj0nlFjIidHPiiF_e2R2s5rhwUHdCvLxIAbfqgCFNKBIBwvwzlpqcvIUSxzb-Q8hObXXpEvzKZTbQ4UP4EynP4I8vMVDcNVobEck-TAW8p6P3KGMQzgZkFR-7lznasGnxbfZISQoOyeaJYaMETN3aLJDQTIA"
      ],
      "Content-Type": [
        "application/json"
      ],
      "Host": [
        "upfskw5v3h.execute-api.us-east-1.amazonaws.com"
      ],
      "User-Agent": [
        "axios/0.18.1"
      ],
      "Via": [
        "1.1 442b92844f344782438a7e0f5132c125.cloudfront.net (CloudFront)"
      ],
      "X-Amz-Cf-Id": [
        "4r-PnvcpWPyFV_uwDM8DhXtmPx3kZq1bSx-TdUXI46jW9_xNFqdtgg=="
      ],
      "x-amz-date": [
        "20211120T235249Z"
      ],
      "x-amz-security-token": [
        "IQoJb3JpZ2luX2VjEEAaCXVzLWVhc3QtMSJHMEUCIDGAf/LuefpV4GUv3kCTz+aA2T8NzTtzXJd8wzNh3qikAiEAwEtnJ+90UYgY6rqDtWYrTSmQiE463lDN2lAHuJ8gICoqzQQI+f//////////ARADGgw0NjYzNTc3MDkzNDYiDLPQEMi1o2Us8u5zOSqhBGWzUX8MZgHm9Dpk8hSZWIRAXIWVrvxkDBcdNgXwi5bhqr6zwkU4C78KxCLFi3boIOvnNIO0DM7uS66BvJGab7MEbOcV1+nl9s6pfv3tMS0WvAi3nU41Zfwg6//fq6LWsTi+gdIvyrFsC7aj0II5GEEL03GteCX50nfgjqg7yoSBHl9/5qjI7ov6TKnO88ZCGHjfDvCNvKKYkSWXKeo0cdzQjgxaZvDpmDc49/FqUET98uqQpRYh56AV7JU16bCpBbh1Vwu13ZewG6p25qgtPHNvpWbXOsZAMjFVRXMA7NmpLeIVIAkbH8/t9bVwfLicJ0HHkjD+ol10RCOYD3ASQsq2648AAt5rcyM3z+4qZYJKjEohIK/I+py7ZNvat7RyQgY3gjSgeCa8Y7+5sM1VC9QijgTQAtIRyE5Xr0W+eHo77sqZdQRygPBwIL1FZ2LI/HxwVrFpggIlwBwACTIYxBQv7ghuYUJ2Qdw4dz5Ktyp/MdJd2rMYSWcl7evoXff0HYBocyn8LaT+6UE3UQHaLVLk8EJgSYSf2TdA+JI4SxHDR4iHbCKGVgbct/t+cdxH9gqvBFaOWOZa4qDvlq1yOl82z8zHONMHnkH1wyYhEgrf+w/ByBSxURb+Hmf3eJz2wmhLSlG/g8xocsbC8cmJaeAM+NryklsoMQlYdiQfyrQ0gPMlAWTs67LS6/lybzqjvBLMYref7JqPxO+LrS72mOg4MNGU5owGOoUC37guTQxO2Y/19c1ddx06uIdTA9cqog7nDPmEIQYjyKNbDnnk50nu884AWr6dHz2QWKNZTn40RV595NqNg2vk6RRY1CzfpE/Utp0q/MV+BFootLv9OKx4eMq2cr3PtFYYyeKLYYpFPi1dEoQ8MrQaRiblkOpSpDK0jO+ud1paB+xjGW6nfgKbwVRHswCfP2hk0FutbMUhJMnOx/Ob8wFLwRhHvRH997vG0EyAD+iev5Zv9UUZlkP//FI8VlsFll2Vh6u1I2bw2rG7w6WTnRMglglWIFGDtliU2WYRiDh53sZ7bBsMI9vFfbCufQkAQDm8IygqmJInCBWP60s3+9HShyee6AZo"
      ],
      "X-Amzn-Trace-Id": [
        "Root=1-61998a52-185a88920807656121c3a4f2"
      ],
      "X-Forwarded-For": [
        "74.101.16.22, 130.176.10.101"
      ],
      "X-Forwarded-Port": [
        "443"
      ],
      "X-Forwarded-Proto": [
        "https"
      ]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
      "resourceId": "5ysb9s",
      "resourcePath": "/user-info",
      "httpMethod": "GET",
      "extendedRequestId": "JIKM3E5aIAMF0mQ=",
      "requestTime": "20/Nov/2021:23:52:50 +0000",
      "path": "/staging/user-info",
      "accountId": "466357709346",
      "protocol": "HTTP/1.1",
      "stage": "staging",
      "domainPrefix": "upfskw5v3h",
      "requestTimeEpoch": 1637452370100,
      "requestId": "69da0e7c-5ab7-439c-a94b-f5e4e582bdf7",
      "identity": {
        "cognitoIdentityPoolId": "us-east-1:463514ab-1eac-4636-a302-9b7de81c82ce",
        "accountId": "466357709346",
        "cognitoIdentityId": "us-east-1:24b04327-e496-422e-be03-72ef4a8a8afe",
        "caller": "AROAWZFIV5IRIRPOXBIFO:CognitoIdentityCredentials",
        "sourceIp": "74.101.16.22",
        "principalOrgId": "o-w4wxtn1gj2",
        "accessKey": "ASIAWZFIV5IRC5SDJBWM",
        "cognitoAuthenticationType": "authenticated",
        "cognitoAuthenticationProvider": "cognito-idp.us-east-1.amazonaws.com/us-east-1_6wthsnVCN,cognito-idp.us-east-1.amazonaws.com/us-east-1_6wthsnVCN:CognitoSignIn:ed6e0925-a9bc-4533-a30a-1c8c2a2f08ba",
        "userArn": "arn:aws:sts::466357709346:assumed-role/amplify-xwordamplifyweb-staging-30151-authRole/CognitoIdentityCredentials",
        "userAgent": "axios/0.18.1",
        "user": "AROAWZFIV5IRIRPOXBIFO:CognitoIdentityCredentials"
      },
      "domainName": "upfskw5v3h.execute-api.us-east-1.amazonaws.com",
      "apiId": "upfskw5v3h"
    },
    "body": null,
    "isBase64Encoded": false
  }

}
