import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateLocation,fetchCoord,removeError } from "../redux/locationStore";
import {fetchWeather} from '../redux/weatherDataStore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount=()=>{
        if(this.props.renderedBy==="NewsBody" || this.props.renderedBy==="ForecastBody"){
            document.getElementById("nav").style.backgroundColor="#292929"
            document.getElementById("nav").classList.add("fixed-top")
        }
        console.log("inside component didMount before if Header: "+this.props.location_reducer.long);
        
        if(this.props.location_reducer.long){
            console.log("inside component didMount Header: "+this.props.location_reducer.long);
            if(this.props.getData){
                this.props.getData(this.props.location_reducer,this.props.wether_reducer)
            }
            
        }
    }
    componentDidUpdate=(prevProps)=>{
        //console.log("previous: "+prevProps.location_reducer.long);
        //console.log("updated: "+this.props.location_reducer.long);

        if((prevProps.location_reducer.long!==this.props.location_reducer.long) ){
            //console.log("inside if");
            this.props.fetchWeather(this.props.location_reducer.long,this.props.location_reducer.lat)
            
        }

        if(this.props.location_reducer.error){
           
            this.errorNotify()
            this.props.removeError()
        }
        this.props.getData(this.props.location_reducer,this.props.wether_reducer)
    }
    errorNotify=()=>{
        toast.error('Enter Location Correctly !',{autoClose:2000})
    }
    onSubmit=(e)=>{
        e.preventDefault()
         //this.props.getLocation(e.target.locationsearch.value)
        console.log(e.target.locationsearch.value)
        if(e.target.locationsearch.placeholder==="Enter Location"){
        this.props.updateLocation(e.target.locationsearch.value)
        setTimeout(()=>{
            this.props.fetchCoord(this.props.location_reducer.location)
            ,1000})
        }else{
            this.props.fetchNews(e.target.locationsearch.value,undefined)
        }
    }
    render(){
        return(
            <nav id="nav" className="navbar navbar-expand-lg d-flex flex-row justify-content-around">
                <h1 className="">
                {this.props.renderedBy==="WeatherBody"?"Weather":this.props.renderedBy==="NewsBody"?"News":"Forecast"}
                </h1>
                
                    <div className="" role="group">
                        <NavLink to="/" className="btn mr-4 custom" activeClassName="is-active" exact={true}>Weather</NavLink>
                        <NavLink to="/forecast" className="btn mr-4 custom" activeClassName="is-active">Forecast</NavLink>
                        <NavLink to="/news" className="btn custom" activeClassName="is-active">News</NavLink>
                    </div>
                
                
                <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
                    <input name="locationsearch" id="location-inp" className="nav-input" type="search" placeholder={this.props.renderedBy==="NewsBody"?"Enter Topic":"Enter Location"} aria-label="Search" />
                    <button className="btn  my-2 my-sm-0" type="submit">Search</button>
                </form>

            </nav>
        )
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         updateLocation: () => dispatch(updateLocation)
//     }
//   }
function mapStateToProps(state) {
  return { 
      location_reducer: state.location_reducer ,
      wether_reducer:state.wether_reducer
    }
}
// const mapDispatchToProps = dispatch => {
//     //console.log("inside UsersContainer.js: "+dispatch)
//     return {
//         updateLocation: () => dispatch(updateLocation())
//     }
//   }
export default connect(
    mapStateToProps,
    {updateLocation,
    fetchCoord,
    removeError,
    fetchWeather}
)(Header)
  
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Header)