import axios from 'axios';
import ACTION_TYPES from './types';

const LOCAL = true;
export const ROOT_URL = LOCAL ? 'http://localhost:5000/api' : '';

const fetchRecipes = () => (dispatch) => {
  axios.get(`${ROOT_URL}/recipes`)
    .then(res => dispatch({
      type: ACTION_TYPES.FETCH_RECIPES,
      payload: res.data,
    }));
};

export default {
  fetchRecipes,
};
