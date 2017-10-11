
const request = require('request')

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/ac82990c1895d75cec402eaa7dc9e9fd/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to forecast.io')
        } else if(response.statusCode === 404) {
            callback('Unable to fetch weather')
        } else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    })
}

module.exports.getWeather = getWeather

