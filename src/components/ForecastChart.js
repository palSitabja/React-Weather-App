import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
class ForecastChart extends React.Component{
    componentDidMount=()=>{
        var dataTemp_min=[]
        var dataTemp_max=[]
        var labels_date=[]
        if(this.props.weather.data){
        this.props.weather.data.daily.map((day)=>{
            dataTemp_min.push(day.temp.min)
            dataTemp_max.push(day.temp.max)
            labels_date.push(moment.unix(day.dt).format("DD/MM/YYYY"))
        })//#923CB5
        var max_temp_max=Math.max(...dataTemp_max)
        var min_temp_max=Math.min(...dataTemp_max)
        var max_temp_min=Math.max(...dataTemp_min)
        var min_temp_min=Math.min(...dataTemp_min)
        var ctxL = document.getElementById("lineChart").getContext('2d');
        var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        gradientFill.addColorStop(0, "rgba(224, 86, 253,1)");
        gradientFill.addColorStop(1, "rgba(173, 53, 186,0.1)");

        var gradientFill1 = ctxL.createLinearGradient(0, 0, 0, 500);
        // gradientFill1.addColorStop(0, "rgba(173, 53, 186, 1)");
        // gradientFill1.addColorStop(1, "rgba(173, 53, 186, 0.1)");
        gradientFill1.addColorStop(0, "rgba(12, 186, 186,1)");
        gradientFill1.addColorStop(1, "rgba(93, 73, 84,0.1)");
        var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: labels_date,
            datasets: [
            {
                label: "Max Temperature",
                data: dataTemp_max,
                backgroundColor: gradientFill,
                borderColor: [
                '#AD35BA',
                ],
                borderWidth: 2,
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
            },
            {
                label: "Min Temperature",
                data: dataTemp_min,
                backgroundColor: gradientFill1,
                borderColor: [
                '#464668',
                ],
                borderWidth: 2,
                pointBorderColor: "#fff",
                pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Weekly min and max Temperarture'
            },
            // tooltips: {
            //     mode: 'index',
            //     intersect: false,
            //     backgroundColor	:'rgba(255, 255, 255, 0.1)',
            //     //titleFontColor:'#313440',
            //     //bodyFontColor:'#313440',
            //     bodyFontStyle:'bold',
            //     borderColor: '#000000',
            //     borderWidth: 1,
            // },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales:{
                xAxes:[{
                    gridLines:{
                        drawOnChartArea:false
                    }
                }],
                yAxes:[{
                    ticks:{
                        min:min_temp_min-5,
                        max:max_temp_max+5,
                        stepSize:5
                    },
                    gridLines:{
                        drawOnChartArea:false
                    }
                }],
                xAxes:[{
                    ticks:{
                        stepSize:2
                    },
                    gridLines:{
                        drawOnChartArea:false
                    }
                }]
            }
        },
        })}
    }
    render(){
        return (
            <canvas id="lineChart"></canvas>
        )
    }

}


function mapStateToProps(state) {
    return { 
        weather:state.wether_reducer
      }
  }
  export default connect(
      mapStateToProps,
  )(ForecastChart)