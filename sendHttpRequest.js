const https = require('https');
const axios = require('axios');

const RESPONSE_TIMEOUT = parseInt(process.env.RESPONSE_TIMEOUT, 10) || 10000;
async function sendHttpRequest(params, httpMethod = 'GET', statusCode, testTimeout = RESPONSE_TIMEOUT) {
    const conf = {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
        },
        ...params,
        validateStatus(status) {
            return statusCode ? statusCode === status : true;
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
        timeout: testTimeout,
    };
    return axios(conf);
}

module.exports = sendHttpRequest;