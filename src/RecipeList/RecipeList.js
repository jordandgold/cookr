import React, { Component } from "react";

class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="recipe-list list-group">
        <h4>My Recipes</h4>
        {this.props.recipes.map(recipe => {
          return <li className="recipe-list list-group-item">{recipe.name}</li>;
        })}
      </ul>
    );
  }
}

export default RecipeList;
