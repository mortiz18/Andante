import ACTION_TYPES from '../actions/types';

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
