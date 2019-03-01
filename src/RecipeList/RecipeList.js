import React, { Component } from 'react';
import RecipeListItem from '../RecipeListItem/RecipeListItem';

class RecipeList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ul className="recipe-list list-group">
				<h4>My Recipes</h4>
				{this.props.recipes.map((recipe) => {
					return <RecipeListItem recipe={recipe} />
				})}
			</ul>
		);
	}
}

export default RecipeList;