import { combineReducers } from "redux";
import RecipesReducer from "./RecipesReducer";
import ActiveRecipe from "./ActiveRecipeReducer";

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  activeRecipe: ActiveRecipe
});

export default rootReducer;
