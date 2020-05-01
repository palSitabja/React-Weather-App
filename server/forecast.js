const request = require('request')

const forecast=(lat,long,callback)=>{
    const url="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&appid=6226226e2bae20ed065fa44c0394687f"

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body)
        }
    })
}
//forecast(22,88,undefined)
module.exports=forecast