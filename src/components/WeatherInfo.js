import React from 'react'
import { WiCelsius,WiDayFog,WiCloudyWindy,WiHumidity,WiBarometer,WiSandstorm,WiSunrise,WiDayHaze } from "react-icons/wi";

const WeatherInfo=(props)=>{
    return(
        <div className="info-Container">
            <h5 style={{color: "white",textAlign:"center","font-family": "'Leckerli One', 'cursive'","text-shadow": "1px 1px 1px #000000"}}>{props.header}</h5>
            {props.icon}
            <p className={props.class} style={{color: "white",textAlign:"center" ,"text-shadow": "1px 1px 1px #000000"}}>{props.info}</p>
        </div>
    )
}
export default WeatherInfo