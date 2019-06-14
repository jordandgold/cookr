import React from "react";

import Container from "react-bootstrap/Container";

import RecipeList from "../containers/RecipeList";
import RecipeDetail from "../containers/RecipeDetail";

const Home = () => {
  return (
    <React.Fragment>
      <aside className="sidebar">
        <RecipeList />
      </aside>
      <section className="main">
        <Container fluid={true}>
          <RecipeDetail />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
