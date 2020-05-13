import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import VideoBody from './VideoBody'
import WeatherInfo from './WeatherInfo'
import moment from 'moment'
import BeatLoader from "react-spinners/BeatLoader";
import { WiCelsius,WiDayFog,WiThermometer,WiHumidity,WiBarometer,WiSandstorm,WiSunrise,WiDayHaze } from "react-icons/wi";

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
            feels_like:"loading..",
            pressure:"loading..",
            wind_speed:"loading..",
            sunrise:"loading..",
            sunset:"loading..",
            class:"loading",
            icon:"none"
        }
    }
    setstate=(data)=>{
        this.setState(()=>{
            return{
                //current:data.current,
                location:this.props.weather.data.timezone,
                description:this.props.weather.data.current.weather[0].description,
                temp:parseInt(this.props.weather.data.current.temp),
                humidity:this.props.weather.data.current.humidity+' %',
                feels_like:this.props.weather.data.current.feels_like+' C',
                pressure:this.props.weather.data.current.pressure+' hPa',
                wind_speed:this.props.weather.data.current.wind_speed+' met/s',
                sunrise:moment.unix(this.props.weather.data.current.sunrise).format(" h:mm a"),
                sunset:moment.unix(this.props.weather.data.current.sunset).format(" h:mm a"),
                loading:false,
                class:"notransition",
                icon:this.props.weather.data.current.weather[0].icon
            }
        })
    }
    getData=(location,data)=>{
        //console.log("inside weather body\n"+JSON.stringify(location));
        if (this.props.weather.data.current){
            
            //console.log("inside setstate\n");
            this.setstate(data)

        }
    }
     componentDidMount=()=>{
        document.body.style.paddingTop='0'
        if(this.props.weather.data){
            this.setstate()
        }
     }

    render() {
        return (
            <div>
                <Header renderedBy="WeatherBody" getData={this.getData} />


                <div className="weather-body">
                    <VideoBody />
                    <div className="">
                        <p style={{ color: "white", textAlign: "center" }} className="">Time Zone: {this.state.location}</p>
                        <div className="d-flex flex-row justify-content-center  ">
                            {
                                this.state.icon === "none" ? <WiDayFog className="icon-cloud" /> : <img src={"http://openweathermap.org/img/wn/" + this.state.icon + "@2x.png"} alt="" />
                            }
                            <h1 className="display-2">{isNaN(this.state.temp) ? <BeatLoader color='white' loading={this.state.loading} /> : parseInt(this.state.temp)}</h1>
                            <WiCelsius size={64} className="icon-c" />
                        </div>
                        <p className={this.state.class} id="weather-info" ></p>



                        <div className="d-flex flex-row justify-content-center  ">
                            <WeatherInfo class={this.state.class} icon={<WiThermometer className="other-icons" />} header="Real Feel" info={this.state.feels_like} />

                            <WeatherInfo class={this.state.class} icon={<WiBarometer className="other-icons" />} header="Pressure" info={this.state.pressure} />

                            <WeatherInfo class={this.state.class} icon={<WiSandstorm className="other-icons" />} header="Wind" info={this.state.wind_speed} />
                        </div>

                        <div className="horizontal-divider"></div>


                        <div className="d-flex flex-row justify-content-center  ">
                            <WeatherInfo class={this.state.class} icon={<WiSunrise className="other-icons" />} header="Sunrise" info={this.state.sunrise} />

                            <WeatherInfo class={this.state.class} icon={<WiDayHaze className="other-icons" />} header="Sunset" info={this.state.sunset} />

                            <WeatherInfo class={this.state.class} icon={<WiHumidity className="other-icons" />} header="Humidity" info={this.state.humidity} />
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
        location: state.location_reducer ,
        weather:state.wether_reducer
      }
  }
  export default connect(
      mapStateToProps,
  )(WeatherBody)