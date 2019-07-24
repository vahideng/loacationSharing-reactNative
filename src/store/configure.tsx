import {createStore, combineReducers} from 'redux';
import placeReducer from './reducers/places'

const rootReducer = combineReducers<any>({
    places: placeReducer 
})


const configureStore =()=>{
    return createStore(rootReducer)
}

export default configureStore