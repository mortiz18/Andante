import React, { Component } from 'react';
import {HOME_TEXT} from './Text.jsx';

class HomePage extends Component {

  render() {
    return (
      <homeContainer>
        <landing>
          <mainTitle>{HOME_TEXT.TITLE}</mainTitle>
          <subTitle> {HOME_TEXT.SUBTITLE} </subTitle>
        </landing>
        <belowLanding>
          <div class="sectionTitle"></div>
          <div class="foodExamples">
            <img src="./assets/example1.png" id="example" alt="Bowl of Food" height="300" width="300"/>
          </div>
        </belowLanding>
      </homeContainer>

    )
  }
}
export default HomePage;
