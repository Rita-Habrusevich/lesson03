const axios = require('axios');
const { Validator } = require('jsonschema');
const sendHttpRequest = require('./sendHttpRequest');
const spotifyV1Schema = require('./data/spotify-v1');
const spotifyV2Schema = require('./data/spotify-v2');
const spotifyV3Schema = require('./data/spotify-v3');
const validator = new Validator();


describe(`API spotify tests`, function() {

    test(`should status code equal 200 for "Search"`, async () => {
        const response = await axios.get('https://spotify81.p.rapidapi.com/search?q=<REQUIRED>&type=multi&offset=0&limit=10&numberOfTopResults=5', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });

    test(`should status code equal 200 for "Get album metadata Artist related"`, async () => {
        const response = await axios.get('https://spotify81.p.rapidapi.com/album_metadata?id=3IBcauSj5M2A6lTeffJzdv', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });

    test(`should status code equal 200 for "Artist related"`, async () => {
        const response = await axios.get('https://spotify81.p.rapidapi.com/artist_related?id=2w9zwq3AktTeYYMuhMjju8', {
            headers: {

                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        await expect(response.status).toEqual(200)
    });


    test(`should be appropriate json schema for "Search"`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://spotify81.p.rapidapi.com/search?q=<REQUIRED>&type=multi&offset=0&limit=10&numberOfTopResults=5',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        let validationResult = await validator.validate(response.data, spotifyV1Schema);
        await expect(validationResult.errors.length).toEqual(0);
    });

    test(`should be appropriate json schema for "Get album metadata Artist related"`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://spotify81.p.rapidapi.com/album_metadata?id=3IBcauSj5M2A6lTeffJzdv',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        let validationResult = await validator.validate(response.data, spotifyV2Schema);
        await expect(validationResult.errors.length).toEqual(0);
    });

    test(`should be appropriate json schema for "Artist related"`, async () => {
        const response = await axios( {
            method: 'get',
            url: 'https://spotify81.p.rapidapi.com/artist_related?id=2w9zwq3AktTeYYMuhMjju8',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        });
        let validationResult = await validator.validate(response.data, spotifyV3Schema);
        await expect(validationResult.errors.length).toEqual(0);
    });

    let resp;
    test(`send http request method test`, async() => {
        const config = {
            url: 'https://spotify81.p.rapidapi.com/search?q=<REQUIRED>&type=multi&offset=0&limit=10&numberOfTopResults=5',
            headers: {
                'X-RapidAPI-Key': '5b9b99e5admsh5b365e0f0f7bf70p1ba55bjsnb09907079119',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
        };
        resp = await sendHttpRequest(config);
        await expect(resp).toBeValidStatusCode(200);
    });

    test(`send http request method test schema`, async() => {
        await expect(resp).toBeValidSchema(spotifyV1Schema);
    });
});