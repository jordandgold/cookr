import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddRecipeForm extends Component {
  render() {
    return (
      <form>
        <h2>Add a recipe:</h2>
        <div className="input-group">
          <label>Recipe Name</label>
          <input type="text" name="recipeName" />
        </div>
        <div className="input-group">
          <Button variant="primary">Save Recipe</Button>
        </div>
      </form>
    );
  }
}

export default AddRecipeForm;
