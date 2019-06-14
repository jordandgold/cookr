import React from "react";

import Container from "react-bootstrap/Container";

import RecipeList from "../containers/RecipeList";
import AddRecipeForm from "./AddRecipeForm";

const Home = () => {
  return (
    <React.Fragment>
      <aside className="sidebar">
        <RecipeList />
      </aside>
      <section className="main">
        <Container fluid={true}>
          <AddRecipeForm />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
