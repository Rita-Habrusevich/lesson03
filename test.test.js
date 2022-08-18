const axios = require('axios');
const { Validator } = require('jsonschema');
const sendHttpRequest = require('./sendHttpRequest');
const cardValidatorSchema = require('./data/cardValidator-v1');
const validator = new Validator();


describe(`API air quality tests`, function() {
    test(`should status code equal 200`, async () => {
        const response = await axios.get('https://air-quality.p.rapidapi.com/forecast/airquality?lat=35.779&lon=-78.638&hours=72', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });

    test(`should status code equal 200`, async () => {
        const response = await axios.get('https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });

    test(`should status code equal 200`, async () => {
        const response = await axios.get('https://air-quality.p.rapidapi.com/current/airquality?lon=-78.638&lat=35.779', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });


    test(`should be appropriate json schema`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://air-quality.p.rapidapi.com/forecast/airquality?lat=35.779&lon=-78.638&hours=72',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        });
        let validationResult = await validator.validate(response.data, cardValidatorSchema);
        await expect(validationResult.errors.length).toEqual(0);
    });

    let resp;
    test(`send http request method test`, async() => {
        const config = {
            url: 'https://air-quality.p.rapidapi.com/forecast/airquality?lat=35.779&lon=-78.638&hours=72',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
            }
        };
        resp = await sendHttpRequest(config);
        await expect(resp).toBeValidStatusCode(200);
    });

    test(`send http request method test schema`, async() => {
        await expect(resp).toBeValidSchema(cardValidatorSchema);
    });
});