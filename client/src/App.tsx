import React, { Component } from "react";
import "./App.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import RecipeList from "./containers/RecipeList";
import RecipeDetail from "./containers/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

interface IAppState {
  isAddingRecipe: boolean;
  selectedRecipe: boolean;
}

class App extends Component<{}, IAppState> {
  state: IAppState = {
    isAddingRecipe: false,
    selectedRecipe: false
  };

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
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Cookr</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#browse">Browse Recipes</Nav.Link>
            <Nav.Link href="#my-recipes">My Recipes</Nav.Link>
          </Nav>
        </Navbar>
        <Container fluid={true} className="main-container">
          <Row>
            <Col xs="12" md="3">
              <Button variant="primary" onClick={this.handleAddRecipe}>
                Add Recipe
              </Button>
              <RecipeList />
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
