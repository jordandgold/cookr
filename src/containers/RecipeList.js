import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRecipe } from "../actions/index";
import { bindActionCreators } from "redux";

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);
