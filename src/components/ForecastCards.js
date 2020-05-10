import React from 'react'
import moment from 'moment'

const ForecastCards=(props)=>{
        return (
            <div className="col-sm-3 col-6">
                <div className="card text-white mb-3 forecat-card text-center">
                    <div className="card-header">
                        <h5 className="card-title">{moment.unix(props.dt).format("DD/MM/YYYY")}</h5>
                    </div>
                    <div className="card-body">
                        <img src={"http://openweathermap.org/img/wn/"+props.icon+"@2x.png"} alt=""/>
                        <h5 className="card-title">{props.desc}</h5>
                        <p className="card-text">Min: {props.min_temp} Max: {props.max_temp}</p>
                    </div>
                </div>
            </div>
        )
}

export default ForecastCards

// <div className="card img-fluid">
// <img src="images/sunny.jpg" className="card-img-top" alt="..."/>
//     <div className="card-img-overlay">
//         <p className="news-heading">{props.dt}</p>
//         <p className="news-heading">{props.min_temp} {props.max_temp}</p>
//         <p className="news-heading">{props.humidity}</p>
//     </div>
// </div>
//http://openweathermap.org/img/wn/01d@2x.png