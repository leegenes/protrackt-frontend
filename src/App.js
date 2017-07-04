import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import styles from './navigation.css';

const LoginState = () => (
  <Link className={[styles.navlink, styles.navlinkloginstatus].join(' ')}
    id="nav-link-loginstatus" to="/login">Log In</Link>
)

const Home = () => (
  <h1>You made it home</h1>
)

const Overview = () => (
  <h1>This is where projects will be</h1>
)

const Navigation = () => (
  <Router>
    <div className={styles.navbar}>
      <Link className={[styles.navlink, styles.navlinklogo].join(' ')}
        id="nav-link-logo" to="/">PROTRACKT</Link>
      <Link className={[styles.navlink, styles.navlinkloginstatus].join(' ')}
        to="/overview">Overview</Link>
      <LoginState />

      <Route exact path="/" component={Home} />
      <Route path="/overview" component={Overview} />
    </div>
  </Router>
)

export default Navigation;
