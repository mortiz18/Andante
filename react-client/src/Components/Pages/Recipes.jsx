import React, { Component } from 'react';
import RecipeCard from "../Widgets/RecipeCard"

class RecipesPage extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Hello'
    };
  }

  componentDidMount(){

  }



  render() {
    return (
      <recipeMainContainer>
        <recipeFeaturedContainer>
          <mainTitle>Recipes</mainTitle>
        </recipeFeaturedContainer>
        <recipeBodyContainer>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
          <RecipeCard/>
        </recipeBodyContainer>
      </recipeMainContainer>

    )
  }
}
export default RecipesPage;
