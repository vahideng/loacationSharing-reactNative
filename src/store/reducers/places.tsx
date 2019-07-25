import * as actionTypes from '../actions/actionTypes';
import { placeState } from '../type';



const initialState :placeState = {
    places: [],
    selectedPlace: {}
  };
  type myActions= {  
        type: any,
        placeName : any,
        placeKey : number    
  } 
  
  const reducer = (state = initialState, action:myActions) => {
    switch (action.type) {
      case actionTypes.ADD_PLACE:
        return {
          ...state,
          places: state.places.concat({
            key: Math.random(),
            name: action.placeName,
            image: {
              uri:
                "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
            }
          }),
        };
      case actionTypes.DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter((place:any) => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
        };
      case actionTypes.SELECT_PLACE:   
        return {
          ...state,
          selectedPlace: state.places.find((place:any) => {
           
            return place.key === action.placeKey;
          })
        };
      case actionTypes.CLOSE_MODAL:
        return {
          ...state,
          selectedPlace: null
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  