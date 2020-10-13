const request = require('request')

const forcast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b3b881353fe95cac40a47b40c2166ba2&query='+lat+','+long+'&units=f'
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Something went wrong.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +', It is currently '+body.current.temperature+'°F, feels like '+body.current.feelslike+' degrees and the humidity is '+ body.current.humidity +'.')
        }
    })
}

module.exports = forcast