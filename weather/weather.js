
const request = require('request')

var getWeather = () => {
    request({
        url:'https://api.darksky.net/forecast/ac82990c1895d75cec402eaa7dc9e9fd/39.9396284,-75.18663959999999',
        json: true
    }, (error, response, body) => {
        if(error) {
            console.log('Unable to connect to forecast.io')
        } else if(response.statusCode === 404) {
            console.log('Unable to fetch weather')
        } else if(response.statusCode === 200){
        console.log(body.currently.temperature)
        }
    })
}

module.exports.getWeather = getWeather

