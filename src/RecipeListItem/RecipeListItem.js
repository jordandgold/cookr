import React, { Component } from 'react';

class RecipeListItem extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="recipe-list list-group-item">
				{this.props.recipe.name}
			</li>
		);
	}
}

export default RecipeListItem;