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
          name: "Black Bean Enchiladas",
          ingredients: [
            {
              quanity: "1 can",
              name: "black beans"
            },
            {
              quanity: "10",
              name: "tortillas"
            }
          ]
        },
        {
          name: "Baked Falafel Wraps",
          ingredients: [
            {
              quanity: "2 cups",
              name: "dry chickpeas"
            },
            {
              quanity: "1",
              name: "yellow onion"
            }
          ]
        }
      ]
    };
  }

  handleAddRecipe = () => {
    this.setState({ isAddingRecipe: true, selectedRecipe: false });
  };

  handleAddRecipeInput = e => {
    let { name, value } = e.target;
    if (name === "price") value = +value;
    this.setState({ [name]: value });
  };

  handleChangeRecipe = recipe => {
    this.setState({ isAddingRecipe: false, selectedRecipe: recipe });
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
              <RecipeList
                recipes={this.state.recipes}
                onClick={this.handleChangeRecipe}
              />
            </Col>
            <Col xs="12" md="auto">
              {this.state.isAddingRecipe ? <AddRecipeForm /> : ""}
              {this.state.selectedRecipe && (
                <RecipeDetail recipe={this.state.selectedRecipe} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
