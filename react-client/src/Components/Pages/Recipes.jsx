import React, { Component } from 'react';
import ROOT_URL from '../../actions/index'
import axios from 'axios';
import RecipeCard from "../Widgets/RecipeCard";
import {connect} from 'react-redux';
import actions from '../../actions/index'
import { bindActionCreators } from 'redux';

class RecipesPage extends Component {

  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentWillMount(){
    this.props.actions.fetchRecipes();
  }

  renderRecipes(){
    let recipes;
    if (this.props.recipes){
      console.log(this.props.recipes);
      recipes = this.props.recipes.map(recipe =>{
        return (<RecipeCard key={recipe._id} details={recipe}/>);
      });
    }
    return recipes
  }

  render() {
    console.log(this.props);
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



export default connect(
  state => ({
    recipes: state.recipes,
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(RecipesPage);
