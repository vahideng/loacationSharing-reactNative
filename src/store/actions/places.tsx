import * as actionTypes from './actionTypes';

export const addPlace = (placeName: string) => {
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
