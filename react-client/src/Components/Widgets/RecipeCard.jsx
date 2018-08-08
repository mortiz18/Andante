import React, { Component } from 'react';


class RecipeCard extends Component {

  render() {
    return (
      <div class="recipeCard boxShadow">
        <div class="recipeImage"></div>
        
      </div>
    )
  }
}

const styles = {
  Icon: {
    borderRadius: 100,
    backgroundColor: 'white',
  },
};

const COLORS = {
  TWITTER_PRIMARY: '#1da1f2',
  SNAPCHAT_PRIMARY: '#ffef00',
}

export default RecipeCard;
