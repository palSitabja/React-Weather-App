import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import ForecastCards from './ForecastCards'
import ForecastChart from './ForecastChart'
import MoonLoader from "react-spinners/MoonLoader"
import CustomLoader from './CustomLoader'
import { Line } from 'react-chartjs-2'
class ForecastBody extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //console.log('mounted: '+JSON.stringify(this.props.weather));
        document.body.style.paddingTop='10rem'
        //document.body.style.backgroundImage="url('/video/aerial-view-and-grayscale-photography-of-high-rise-buildings-1105766.jpg')"
        document.body.style.backgroundAttachment='fixed'
        document.body.style.backgroundColor="#292929"
        document.body.style.backgroundSize='cover'
        // document.body.style.backgroundRepeat='repeat'
        //document.body.style.paddingTop='10rem'
        //document.getElementsByClassName('btn').
        //document.getElementsByClassName('btn').style.backgroundColor='#606060'

        // var ctxL = document.getElementById("canvas").getContext('2d');
        // var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        // gradientFill.addColorStop(0, "rgba(173, 53, 186, 1)");
        // gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
    }
    getData = (location, data) => { }

    render() {
        return (
            <div>
                <Header getData={this.getData} renderedBy="ForecastBody" />
                <div className="container">
                    <div className="row chart">
                        <ForecastChart />
                    </div>
                </div>
                <div className="container" style={{display:'flex',justifyContent:'center'}}>
                    <div className="scrolling-wrapper">

                        {
                            this.props.weather.data?
                            (this.props.weather.data.daily.map((day)=>{
                                return(
                                    <ForecastCards feel={day.feels_like.day} 
                                    hum={day.humidity}
                                    dt={day.dt} icon={day.weather[0].icon}
                                    rain={day.rain?day.rain:"0"}
                                    desc={day.weather[0].description}
                                    key={day.dt}
                                    />
                                )
                            })
                            ):<CustomLoader renderer={"forecast"}/>
                        }

                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather: state.wether_reducer
    }
}
export default connect(
    mapStateToProps,
)(ForecastBody)

//   background-color: #923cb5;
// background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);