import React, { Component } from 'react';
import {HOME_TEXT} from './Text.jsx';

class HomePage extends Component {

  render() {
    return (
      <div className="homeContainer">
        <div className="landing">
          <div className="mainTitle">{HOME_TEXT.TITLE}</div>
          <div className="subTitle"> {HOME_TEXT.SUBTITLE} </div>
        </div>
        <div className="belowLanding">
          <div className="intro">
            <div className="introTitle">{HOME_TEXT.SECTION_TITLE}</div>
            <div className="introSubtext">{HOME_TEXT.SECTION_CONTENT}</div>
          </div>
          <div className="foodExamples">
            <img src="./assets/pasta.jpg" id="example" alt="Bowl of Food" height="400" width="600"/>
          </div>
        </div>
      </div>

    )
  }
}
export default HomePage;
