import React, { Component } from "react";

// components
import RecipeList from "./RecipeList/RecipeList";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import AddRecipe from "./AddRecipe/AddRecipe";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AddRecipeForm from "./AddRecipeForm/AddRecipeForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddingRecipe: false,
      selectedRecipe: false,
      recipes: [
        {
          name: "Black Bean Enchiladas"
        },
        {
          name: "Baked Falafel Wraps"
        }
      ]
    };
  }

  handleAddRecipe = () => {
    this.setState({ isAddingRecipe: true });
  };

  render() {
    return (
      <div className="App">
        <Container fluid="true">
          <Row>
            <Col xs="12" md="3">
              <Button variant="primary" onClick={this.handleAddRecipe}>
                Add Recipe
              </Button>
              <RecipeList recipes={this.state.recipes} />
            </Col>
            <Col xs="12" md="auto">
              {this.state.isAddingRecipe ? <AddRecipeForm /> : ""}
              <RecipeDetail recipe={this.state.selectedRecipe} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
