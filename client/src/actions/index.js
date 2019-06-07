export function selectRecipe(recipe) {
  return {
    type: "RECIPE_SELECTED",
    payload: recipe
  };
}
