import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRecipe } from "../actions/index";

class RecipeList extends Component {
  render() {
    return (
      <ul className="recipe-list list-group">
        <h4>My Recipes</h4>
        {this.props.recipes.map(recipe => {
          return (
            <li
              className="recipe-list list-group-item"
              onClick={() => this.props.selectRecipe(recipe)}
            >
              {recipe.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(
  mapStateToProps,
  { selectRecipe }
)(RecipeList);
