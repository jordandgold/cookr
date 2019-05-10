import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import RecipeList from "./containers/RecipeList";
import RecipeDetail from "./containers/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddingRecipe: false
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
    this.setState({ isAddingRecipe: false });
  };

  render() {
    return (
      <div className="App">
        <Container fluid="true">
          <Row>
            <Col xs="12" md="4">
              <Button variant="primary" onClick={this.handleAddRecipe}>
                Add Recipe
              </Button>
              <RecipeList
                recipes={this.state.recipes}
                onClick={this.handleChangeRecipe}
              />
            </Col>
            <Col xs="12" md="auto">
              {this.state.isAddingRecipe && <AddRecipeForm />}
              <RecipeDetail />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
