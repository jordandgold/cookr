import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import RecipeList from "./containers/RecipeList";
import RecipeDetail from "./containers/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

interface IAppState {
  isAddingRecipe: boolean
  selectedRecipe: boolean
}

class App extends Component<{}, IAppState> {
  state: IAppState = {
    isAddingRecipe: false,
    selectedRecipe: false
  }

  handleAddRecipe = () => {
    this.setState({ isAddingRecipe: true, selectedRecipe: false });
  };

  // handleAddRecipeInput = e => {
  //   let { name, value } = e.target;
  //   if (name === "price") value = +value;
  //   this.setState({ [name]: value });
  // };

  // handleChangeRecipe = (recipe: IRecipe) => {
  //   this.setState({ isAddingRecipe: false });
  // };

  public render(): React.ReactElement<App> {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col xs="12" md="4">
              <Button variant="primary" onClick={this.handleAddRecipe}>
                Add Recipe
              </Button>
              <RecipeList/>
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
