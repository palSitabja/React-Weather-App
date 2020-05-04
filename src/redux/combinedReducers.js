import {locationReducer} from './locationStore'
import {weatherReducer} from './weatherDataStore'
import {createStore,combineReducers} from 'redux'


const rootReducer = combineReducers({
    location_reducer: locationReducer,
    wether_reducer: weatherReducer
  })

export default rootReducer