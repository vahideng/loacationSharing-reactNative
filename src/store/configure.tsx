import {createStore, combineReducers, compose} from 'redux';
import placeReducer from './reducers/places'

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const rootReducer = combineReducers<any>({
    places: placeReducer 
})
let composeEnhancers = compose

if(__DEV__){
    composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const configureStore =()=>{
    return createStore(rootReducer, composeEnhancers())
}

export default configureStore