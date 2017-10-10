const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=72%20neslon%20street%20auckland%20new%20zealand',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(response, undefined, 2))
})