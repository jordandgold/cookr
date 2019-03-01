import React, { Component } from 'react';

// components
import RecipeList from './RecipeList/RecipeList';
import RecipeDetail from './RecipeDetail/RecipeDetail';

// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
      <div className="App">
			<Container fluid="true">
				<Row>
					<Col xs="12" md="3">
						<Button variant="primary">Add Recipe</Button>
						<RecipeList />
					</Col>
					<Col xs="12" md="auto">
						<RecipeDetail />
					</Col>
				</Row>
			</Container>
      </div>
    );
  }
}

export default App;
