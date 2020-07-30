const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = async (AWS, baseResponse) => {
  const bucketName = process.env.BUCKET_NAME
  const s3 = new AWS.S3({
    region: 'eu-central-1',
    apiVersion: '2006-03-01'
  })
  return getSections(s3, bucketName)
    .then(getApps(s3, bucketName))
    .then(processRes(baseResponse))
    .catch(processErr(baseResponse))
}

function getSections (s3, bucketName) {
  const params = {
    Bucket: bucketName,
    Delimiter: '/',
    Prefix: 'modules/@kaskadi/kaskadi-apps/'
  }
  return s3.listObjectsV2(params).promise()
    .then(appFoldersData => appFoldersData.CommonPrefixes.map(prefixMap => prefixMap.Prefix))
}

function getApps (s3, bucketName) {
  return appFolderPrefixes => Promise.all(appFolderPrefixes.map(fetchApp(s3, bucketName)))
}

function fetchApp (s3, bucketName) {
  return appFolderPrefix => {
    const appParams = {
      Bucket: bucketName,
      Key: `${appFolderPrefix}app.json`
    }
    return s3.getObject(appParams).promise()
      .then(data => JSON.parse(data.Body.toString()))
  }
}
