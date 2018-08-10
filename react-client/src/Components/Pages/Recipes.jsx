import React, { Component } from 'react';
import ROOT_URL from '../../actions/index'
import axios from 'axios';
import RecipeCard from "../Widgets/RecipeCard";

class RecipesPage extends Component {

  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentWillMount(){
    this.fetchRecipes();
  }

  fetchRecipes(){
    axios.get(`${ROOT_URL}/recipes`)
      .then((res) => {
        this.setState({recipes: res.data})
      });
  }

  renderRecipes(){
    let recipes;
    recipes = this.state.recipes.map(recipe =>{
      return (<RecipeCard key={recipe._id} details={recipe}/>);
    });
    return recipes;
  }

  render() {
    return (
      <div className="recipeMainContainer">
        <div className="recipeFeaturedContainer">
          <div className="mainTitle">Recipes</div>
        </div>
        <div className="recipeBodyContainer">
          {this.renderRecipes()}
        </div>
      </div>

    )
  }
}
export default RecipesPage;
