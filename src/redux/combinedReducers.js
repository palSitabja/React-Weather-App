import {locationReducer} from './locationStore'
import {weatherReducer} from './weatherDataStore'
import {newsReducer} from './NewsDatastore'
import {createStore,combineReducers} from 'redux'


const rootReducer = combineReducers({
    location_reducer: locationReducer,
    wether_reducer: weatherReducer,
    news_reducer:newsReducer
  })

export default rootReducer