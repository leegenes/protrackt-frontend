import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import styles from './navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "Sign In"};
  }

  render() { return (
      <div className={styles.navbar}>
        <a className={[styles.navlink, styles.navlinklogo].join(' ')} id="nav-link-logo" href="#">PROTRACKT</a>
        <a className={[styles.navlink, styles.navlinkloginstatus].join(' ')} id="nav-link-loginstatus" href="#">{ this.state.text }</a>
      </div>
    );
  }
}

export default Navigation;
