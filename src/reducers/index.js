import { combineReducers } from "redux";
import RecipesReducer from "./ReducerRecipes";

const rootReducer = combineReducers({
  recipes: RecipesReducer
});

export default rootReducer;
