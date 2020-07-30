const AWS = require('aws-sdk')
const retrieveApps = require('./helpers/retrieve-apps.js')

module.exports.handler = async (event) => {
  const baseResponse = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  return await retrieveApps(AWS, baseResponse)
}
