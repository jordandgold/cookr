import React, { Component } from "react";

class RecipeDetail extends Component {
  render() {
    return (
      <div className="recipe-detail">
        <h3>{this.props.recipe.name}</h3>
        <h4>Ingredients</h4>
        <h4>Directions</h4>
      </div>
    );
  }
}

export default RecipeDetail;
