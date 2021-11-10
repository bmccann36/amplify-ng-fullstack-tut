
import * as S3 from 'aws-sdk/clients/s3'

const s3 = new S3();
const BUCKET_NAME = process.env.STORAGE_PUZZLEBUCKET_BUCKETNAME;

export default async function fetchLatestXword(): Promise<Buffer> {

  const todayDateOnly = new Date().toISOString().split('T')[0];
  const yyyyMM = todayDateOnly.slice(0, 7);

  const searchPrefix = 'puzzle-' + yyyyMM;


  const params = {
    Bucket: BUCKET_NAME,
    Prefix: searchPrefix,
  };

  const s3res = await s3.listObjectsV2(params).promise()

  const sorted = s3res.Contents.sort((curr, prev) => {
    if (curr.LastModified < prev.LastModified) {
      return 1
    } else return -1
  })
  const newestKey = sorted[0].Key;
  console.log('latest key is: ', newestKey);

  const getParams: S3.Types.GetObjectRequest = {
    Bucket: BUCKET_NAME,
    Key: newestKey
  }
  const fetchedItem = await s3.getObject(getParams).promise();

  return <Buffer>fetchedItem.Body;

}

