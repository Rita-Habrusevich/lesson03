const axios = require('axios');
const { Validator } = require('jsonschema');
const sendHttpRequest = require('./sendHttpRequest');
const cardValidatorSchema = require('./data/cardValidator-v1');
const validator = new Validator();


describe(`API card validator tests`, function() {
    test(`should status code equal 200`, async () => {
        const response = await axios.get('https://card-validator.p.rapidapi.com/generate?cardLength=4', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'card-validator.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });

    test(`should be appropriate json schema`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://card-validator.p.rapidapi.com/generate?cardLength=4',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'card-validator.p.rapidapi.com'
            }
        });
        let validationResult = await validator.validate(response.data, cardValidatorSchema);
        await expect(validationResult.errors.length).toEqual(0);
    });

    let resp;
    test(`send http request method test`, async() => {
        const config = {
            url: 'https://card-validator.p.rapidapi.com/generate?cardLength=4',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'card-validator.p.rapidapi.com'
            }
        };
        resp = await sendHttpRequest(config);
        await expect(resp).toBeValidStatusCode(200);
    });

    test(`send http request method test schema`, async() => {
        await expect(resp).toBeValidSchema(cardValidatorSchema);
    });
});