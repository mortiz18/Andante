import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class SMBar extends Component {


  render() {
    return (
      <div class="socialMediaIcons">
        <SocialIcon url="http://twitter.com" style={styles.Icon}/>
        <SocialIcon url="http://facebook.com" style={styles.Icon}/>
        <SocialIcon network="snapchat" color={COLORS.SNAPCHAT_PRIMARY} style={styles.Icon}/>
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

export default SMBar;
