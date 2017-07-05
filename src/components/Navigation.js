import React from 'react';
import SignIn from './SignIn';

import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';
import styles from './app.css';

class SignInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalActive: false };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    <SignIn />
  }

  render() {
    return(
    <button className={[styles.navlink, styles.navlinkloginstatus].join(' ')}
     onClick={this.onButtonClick}>SIGN IN</button>)
  }
}

const Navigation = () => (
    <div>
      <div className={styles.navbar}>
        <a className={[styles.navlink, styles.navlinklogo].join(' ')}
          id="nav-link-logo" href="/">PROTRACKT</a>
        <SignInButton />
      </div>
    </div>
)
export default Navigation;
