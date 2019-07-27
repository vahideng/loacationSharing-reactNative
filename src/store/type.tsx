import { any } from 'prop-types';

export interface placeName {
  key: number;
  name: string;
  image: any;
}

export interface placeState {
  places: object[];
  selectedPlace: any;
}
