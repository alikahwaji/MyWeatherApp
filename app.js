
// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }

// })
// .help()
// .alias('help', 'h')
// .argv

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// })

const request = require('request')

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