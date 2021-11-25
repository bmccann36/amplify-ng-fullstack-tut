import { DocumentClient } from 'aws-sdk/clients/dynamodb';
const docClient = new DocumentClient();

export default async function fetchUserInfo(cognitoSub: String) {


  var params = {
    TableName: process.env.STORAGE_RMXWORDDB_NAME,
    Key: {
      cognitoSub
    }
  };

  const res = await docClient.get(params).promise()

  if (res.Item) {
    return {
      cognitoSub: res.Item.cognitoSub,
      createdAt: res.Item.createdAt
    }
  } else {
    return {}
  }

}


