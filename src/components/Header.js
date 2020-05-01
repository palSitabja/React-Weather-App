import React from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit=(e)=>{
        e.preventDefault()
         this.props.getLocation(e.target.locationsearch.value)
         console.log(e.target.locationsearch.value)
        
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
export default Header