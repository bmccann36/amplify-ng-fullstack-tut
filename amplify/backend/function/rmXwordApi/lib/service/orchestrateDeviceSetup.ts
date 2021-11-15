import { Remarkable } from 'remarkable-typescript';
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import * as getUuid from 'uuid-by-string';
import fetchLatestXword from './fetchLatestXword';


const docClient = new DocumentClient();


export default async (code: string, cognitoSub: string) => {
  //* Get the code from the remarkable client
  const rmClient = new Remarkable();
  const generatedToken = await rmClient.register({ code });
  console.log('fetch auth token success');

  //* Save the generated token to the database
  const params = {
    TableName: process.env.STORAGE_RMXWORDDB_NAME,
    Item: {
      cognitoSub: cognitoSub,
      deviceToken: generatedToken
    }
  };
  const dynamoRes = await docClient.put(params).promise();
  console.log('dynamo res: ' + dynamoRes);

  //* Create the folder on the device
  const authRmClient = new Remarkable({ deviceToken: generatedToken });
  await authRmClient.refreshToken();
  const dirCreateRes = await authRmClient
    .createDirectory('Remarkable Crossword', getUuid('Remarkable Crossword'));
  console.log('directory created with uuid: ' + dirCreateRes);

  //* create a crossword on the device after making the folder
  const fileBuffer = await fetchLatestXword()
  console.log('uploading fetched s3 file to remarkable');
  const pdfUploadedId = await authRmClient.uploadPDF(
    'sample-crossword',
    getUuid('sample-crossword'),
    fileBuffer,
    getUuid('Remarkable Crossword'));
  console.log('pdfUploadedId :>> ', pdfUploadedId);

  console.log('all orchestration steps completed successfully');

};
