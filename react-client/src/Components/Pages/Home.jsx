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
          <intro>
            <div className="introTitle">{HOME_TEXT.SECTION_TITLE}</div>
            <div className="introSubtext">{HOME_TEXT.SECTION_CONTENT}</div>
          </intro>
          <div class="foodExamples">
            <img src="./assets/pasta.jpg" id="example" alt="Bowl of Food" height="400" width="600"/>
          </div>
        </belowLanding>
      </homeContainer>

    )
  }
}
export default HomePage;
