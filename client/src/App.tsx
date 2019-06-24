import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// import RecipeList from "./containers/RecipeList";
// import RecipeDetail from "./containers/RecipeDetail";
// import AddRecipeForm from "./components/AddRecipeForm";

import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import UserRegistrationForm from "./components/UserRegistrationForm";

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
        <Router>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Cookr</Navbar.Brand>
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/browse">Browse</Link>
              <Link to="/my-recipes">My Recipes</Link>
            </Nav>
            <Link to="/add-recipe">
              <Button variant="primary" className="ml-auto">
                Add Recipe
              </Button>
            </Link>
          </Navbar>
          <div className="main-container">
            <Route path="/" exact component={Home} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/register" component={UserRegistrationForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
