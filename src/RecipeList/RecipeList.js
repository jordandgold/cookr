import React, { Component } from 'react';
import RecipeListItems from '../RecipeListItems/RecipeListItems';

class RecipeList extends Component {
	render() {
		return (
			<ul className="recipe-list list-group">
				<RecipeListItems />
			</ul>
		);
	}
}

export default RecipeList;