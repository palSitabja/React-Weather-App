
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

