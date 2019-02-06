import { REQUEST_COUNTIES, SET_SELECTED_COUNTY } from '../types/actionTypes';

const initialState = {
  counties: {},
  isLoading: false,
  selectedCounty: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNTIES:
      return {
        ...state,
        isLoading: true,
        counties: action.data
      };
    case SET_SELECTED_COUNTY:
      return {
        ...state,
        isLoading: true,
        selectedCounty: action.data
      };
    default:
      return state;
  }
}
