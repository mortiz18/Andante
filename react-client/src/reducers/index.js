import { combineReducers } from 'redux';
import RecipeReducer from './recipeReducer';

export default combineReducers({
  recipes: RecipeReducer,
});
