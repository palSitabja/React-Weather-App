import React from 'react'
import Header from '../components/Header'
import VideoBody from './VideoBody'
import WeatherInfo from './WeatherInfo'
import moment from 'moment'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import { WiCelsius,WiDayFog,WiCloudyWindy,WiHumidity,WiBarometer,WiSandstorm,WiSunrise,WiDayHaze } from "react-icons/wi";
import { BsCursor } from "react-icons/bs";
const override = css`


`;
 
class WeatherBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            location:"loading..",
            long:"",
            lat:"",
            current:"loading..",
            description:"loading..",
            loading:true,
            temp:"loading..",
            humidity:"loading..",
            pressure:"loading..",
            wind_speed:"loading..",
            sunrise:"loading..",
            sunset:"loading..",
            class:"loading"
        }
    }
    getLocation=(searchlocation)=>{
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + searchlocation + '.json?access_token=pk.eyJ1Ijoic2l0YWJqYTAzIiwiYSI6ImNrN204cWo3MzBnMTgzbXB0bGZ1enE3a3cifQ.F08TP2oGOlUMPqfuB1VdMg'
        //console.log(location);
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data.features[0].center)
            this.setState(()=>{
                return{
                    //location:searchlocation,
                    long:data.features[0].center[0],
                    lat:data.features[0].center[1]
                }
            })
            this.fetchWeather(this.state.lat,this.state.long)
        })
        .catch((error)=>console.log("Error !"+error))

        this.setState(()=>{
            return{
                location:searchlocation
            }
        })
    }
    fetchWeather=(lat,long)=>{
        const url="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&appid=6226226e2bae20ed065fa44c0394687f"
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data.current);
            document.getElementById('weather-info').innerHTML="Description: "+data.current.weather[0].description
            this.setState(()=>{
                return{
                    current:data.current,
                    location:data.timezone,
                    description:data.current.weather[0].description,
                    temp:parseInt(data.current.temp),
                    humidity:data.current.humidity+' hPa',
                    pressure:data.current.pressure+' %',
                    wind_speed:data.current.wind_speed+' met/s',
                    sunrise:moment.unix(data.current.sunrise).format(" h:mm a"),
                    sunset:moment.unix(data.current.sunset).format(" h:mm a"),
                    loading:false,
                    class:"notransition"
                }
            })
        })
    }
    // componentDidUpdate=()=>{
    //     console.log("updated");
        
    // }
    componentWillMount=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState(()=>{
                    return{
                        long:position.coords.longitude,
                        lat:position.coords.latitude
                    }
                })  
                this.fetchWeather(this.state.lat,this.state.long)
            })
            
        }
    }
    render(){
        return(
            <div>
                <Header getLocation={this.getLocation}/>
                <div className="weather-body">
                    <VideoBody/>
                    <div className="">
                        <p style={{color: "white",textAlign:"center"}} className="">Time Zone: {this.state.location}</p>
                        <div className="d-flex flex-row justify-content-center  ">
                            <WiDayFog className="icon-cloud"/>
                            <h1 className="display-2">{isNaN(this.state.temp)? <BeatLoader color='white' css={override} loading={this.state.loading} />: parseInt(this.state.temp)}</h1>
                            <WiCelsius size={64} className="icon-c"/>
                        </div>
                        <p className={this.state.class} id="weather-info" ></p>

                        

                        <div className="d-flex flex-row justify-content-center  ">
                            <WeatherInfo class={this.state.class} icon={<WiHumidity className="other-icons"/>} header="Humidity" info={this.state.humidity} />

                            <WeatherInfo class={this.state.class} icon={<WiBarometer className="other-icons"/>} header="Pressure" info={this.state.pressure} />

                            <WeatherInfo class={this.state.class} icon={<WiSandstorm className="other-icons"/>} header="Wind" info={this.state.wind_speed} />
                        </div>

                        <div className="horizontal-divider"></div>


                        <div className="d-flex flex-row justify-content-center  ">
                            <WeatherInfo class={this.state.class} icon={<WiSunrise className="other-icons"/>} header="Sunrise" info={this.state.sunrise} />

                            <WeatherInfo class={this.state.class} icon={<WiDayHaze className="other-icons"/>} header="Sunset" info={this.state.sunset} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WeatherBody