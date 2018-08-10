import React, { Component } from 'react';


class RecipeCard extends Component {


  render() {
    return (
      <div className="recipeCard boxShadow">
        <div className="recipeImage"></div>
        <div className="recipeTitle">{this.props.details.name}</div>
        <div id="bottomBorder"></div>
      </div>
    )
  }
}

const styles = {
  Title: {

  },
};

const COLORS = {
  TWITTER_PRIMARY: '#1da1f2',
  SNAPCHAT_PRIMARY: '#ffef00',
}

export default RecipeCard;
