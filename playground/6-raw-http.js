const https = require('https');

const url = 'https://api.darksky.net/forecast/6631718a4504813461983d98e11e1a0b/40,-75';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    });

});

request.on('error', (error) => {
    console.log('An error', error)
});

request.end();