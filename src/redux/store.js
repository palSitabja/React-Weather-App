import {createStore, applyMiddleware} from 'redux'
import moment from 'moment'
import thunk from 'redux-thunk'
import {updateLocation} from './locationStore'
import rootReducer from './combinedReducers'

const store=createStore(rootReducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
    //store.dispatch(updateLocation('Konnagar'))
})


export default store