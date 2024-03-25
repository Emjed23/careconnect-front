import { ADD_REVIEW, } from '../actions/types';

const ReviewReducer = (state =[], action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [...state,action.payload];
    default:
      return state;
  }
};


export default ReviewReducer;