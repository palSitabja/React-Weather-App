import axios from 'axios'
//import {fetchWeather} from './weatherDataStore'
const locationInitialState = {
    loading: false,
    location: "",
    long:"",
    lat:"",
    error: ''
  }

const FETCH_USER_COORD='FETCH_USER_COORD'
const UPDATE_LOCATION="UPDATE_LOCATION"
const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST'
const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE'
const REMOVE_ERROR='REMOVE_ERROR'

export const fetchLocationRequest=()=>{
  return{
    type:FETCH_LOCATION_REQUEST
  }
}

export const fetchLocationSuccess=(long,lat)=>{
  return{
    type:FETCH_LOCATION_SUCCESS,
    long,
    lat
  }
}

export const fetchLocationFailure=(error)=>{
  return{
    type:FETCH_LOCATION_FAILURE,
    error
  }
}

export const fetchCoord = (location) => {
  //'https://jsonplaceholder.typicode.com/users'
  const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1Ijoic2l0YWJqYTAzIiwiYSI6ImNrN204cWo3MzBnMTgzbXB0bGZ1enE3a3cifQ.F08TP2oGOlUMPqfuB1VdMg'
return function (dispatch) {
  dispatch(fetchLocationRequest())
  axios
    .get(url)
    .then(response => {
      // response.data is the weather
      const long = response.data.features[0].center[0]
      const lat = response.data.features[0].center[1]
      dispatch(fetchLocationSuccess(long,lat))
    })
    .catch(error => {
      // error.message is the error message
      dispatch(fetchLocationFailure(error.message))
    })
}
}

export const updateLocation=(loc)=>{
    // Promise.resolve({
    //     type:UPDATE_LOCATION,
    //     location:loc
    //   })
    return{
        type:UPDATE_LOCATION,
        location:loc
        
    }
}
export const removeError=()=>{
  return{
      type:REMOVE_ERROR,
      error:""   
  }
}



export const locationReducer = (state = locationInitialState, action) => {
    switch (action.type){
      case UPDATE_LOCATION:
        return{
          ...state,
          location:action.location
        }
      case FETCH_LOCATION_REQUEST:
        return{
          ...state,
          loading:true
        }
      case FETCH_LOCATION_SUCCESS:
        return{
          ...state,
          long:action.long,
          lat:action.lat,
          error:''
        }
      case FETCH_LOCATION_FAILURE:
          return{
            ...state,
            error:action.error
          }
        case REMOVE_ERROR:
            return{
              ...state,
              error:action.error
            }
      
      default: return {...state}
    }
}
