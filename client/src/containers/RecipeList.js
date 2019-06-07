import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRecipe } from "../actions/index";

import "./RecipeList.scss";

import ListGroup from "react-bootstrap/ListGroup";

class RecipeList extends Component {
  render() {
    return (
      <ListGroup className="recipe-list">
        <ListGroup.Item>
          <strong>My Recipes</strong>
        </ListGroup.Item>
        {this.props.recipes.map(recipe => {
          return (
            <ListGroup.Item
              action
              onClick={() => this.props.selectRecipe(recipe)}
            >
              {recipe.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
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
