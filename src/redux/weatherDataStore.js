
import axios from 'axios'

const weatherInitialState = {
  loading: false,
  data: "",
  error: ''
}

const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'

export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST
  }
}

export const fetchWeatherSuccess = data => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    data
  }
}

export const fetchWeatherFailure = error => {
  return {
    type: FETCH_WEATHER_FAILURE,
    data: error
  }
}

export const fetchWeather = (long,lat) => {
    //const address='kolkata'
    console.log("inside fetchweather: "+long,lat);
    
    const url="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&units=metric&appid=6226226e2bae20ed065fa44c0394687f"
  return function (dispatch) {
    dispatch(fetchWeatherRequest())
    axios
      .get(url)
      .then(response => {
        // response.data is the weather
        const data = response.data
        dispatch(fetchWeatherSuccess(data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchWeatherFailure(error.message))
      })
  }
}

export const weatherReducer = (state = weatherInitialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_WEATHER_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: ''
      }
    case FETCH_WEATHER_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.data
      }
    default: return {...state}
  }
}

