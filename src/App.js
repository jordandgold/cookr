import React, { Component } from 'react';

// components
import RecipeList from './RecipeList/RecipeList';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import AddRecipe from './AddRecipe/AddRecipe';

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isAddingRecipe: false,
			selectedRecipe: false,
			recipes: [
				{
					name: 'Black Bean Enchiladas',
				},
				{
					name: 'Baked Falafel Wraps',
				}
			]
		}
	}

	render() {
	    return (
	      <div className="App">
				<Container fluid="true">
					<Row>
						<Col xs="12" md="3">
							<AddRecipe isAddingRecipe={this.state.isAddingRecipe} />
							<RecipeList recipes={this.state.recipes} />
						</Col>
						<Col xs="12" md="auto">
							<RecipeDetail recipe={this.state.selectedRecipe} />
						</Col>
					</Row>
				</Container>
	      </div>
	    );
	}
}

export default App;
