import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeDetail extends Component {
  render() {
    if (!this.props.recipe) {
      return <div>Select a recipe to get started</div>;
    }

    return (
      <div className="recipe-detail">
        <h3>{this.props.recipe.name}</h3>
        <h4>Ingredients</h4>
        <h4>Directions</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.activeRecipe
  };
}

export default connect(mapStateToProps)(RecipeDetail);
