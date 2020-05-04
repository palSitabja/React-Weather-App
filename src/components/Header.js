import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateLocation,fetchCoord } from "../redux/locationStore";
import {fetchWeather} from '../redux/weatherDataStore'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    // onSubmit=(e)=>{
    //     e.preventDefault()
    //      //this.props.getLocation(e.target.locationsearch.value)
    //     console.log(e.target.locationsearch.value)
    //     this.props.updateLocation(e.target.locationsearch.value)
    //     setTimeout(()=>{
    //         this.props.fetchCoord(this.props.location_reducer.location)
    //         setTimeout(()=>{
    //             this.props.fetchWeather(this.props.location_reducer.long,this.props.location_reducer.lat)
    //         },5000),1000})
    //     //this.props.fetchCoord(this.props.location) 
    // }
    componentDidMount=()=>{
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
        this.props.getData(this.props.location_reducer,this.props.wether_reducer)
    }
    onSubmit=(e)=>{
        e.preventDefault()
         //this.props.getLocation(e.target.locationsearch.value)
        console.log(e.target.locationsearch.value)
        this.props.updateLocation(e.target.locationsearch.value)
        setTimeout(()=>{
            this.props.fetchCoord(this.props.location_reducer.location)
            ,1000})
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg d-flex flex-row justify-content-around">
                <h1 className="">Weather</h1>
                
                    <div className="" role="group">
                        <NavLink to="/" className="btn mr-4 custom" activeClassName="is-active" exact={true}>Weather</NavLink>
                        <NavLink to="/forecast" className="btn mr-4 custom" activeClassName="is-active">Forecast</NavLink>
                        <NavLink to="/news" className="btn custom" activeClassName="is-active">News</NavLink>
                    </div>
                
                
                <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
                    <input name="locationsearch" id="location-inp" className="nav-input" type="search" placeholder="Enter Location" aria-label="Search" />
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
    fetchWeather}
)(Header)
  
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Header)