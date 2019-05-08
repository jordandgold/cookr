import React, { Component } from 'react';

// components
import AddRecipeForm from '../AddRecipeForm/AddRecipeForm';

// bootstrap
import Button from 'react-bootstrap/Button';

class AddRecipe extends Component {
	constructor(props) {
		super(props)
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
	}

	handleAddRecipe() {
		this.setState({isAddingRecipe: true});
	}

	render() {
		const isAddingRecipe = this.props.isAddingRecipe;
		let AddRecipe;

		if (isAddingRecipe) {
			AddRecipe = <AddRecipeForm />;
		} else {
			AddRecipe = <Button variant="primary" onClick={this.handleAddRecipe}>Add Recipe</Button>;
		}

		return (
			<div>
				{AddRecipe}
			</div>
		);
	}
}

export default AddRecipe;