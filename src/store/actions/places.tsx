import * as actionTypes from './actionTypes';
import { placeName } from '../type';

interface addPlace {
  type: typeof actionTypes.ADD_PLACE;
  placeName: placeName;
}

export const addPlace = (placeName: placeName): addPlace => {
  return {
    type: actionTypes.ADD_PLACE,
    placeName
  };
};
export const deletePlace = () => {
  return {
    type: actionTypes.DELETE_PLACE
  };
};
export const selectPlace = (key: number) => {
  return {
    type: actionTypes.SELECT_PLACE,
    placeKey: key
  };
};
export const closeMoadl = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};
