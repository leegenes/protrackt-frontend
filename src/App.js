import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import styles from './app.css';

const Home = () => (
  <h1>You made it home</h1>
)

const Login = () => (
    <div className={styles.formcontainer}>
      <div className={styles.formblock}>
        <form>
            <input className={styles.formfield}
              type="text" name="username" placeholder="Username"  />
            <br />
            <input className={styles.formfield}
              type="password" name="password" placeholder="Password" />
            <br />
            <input className={styles.formfield} type="submit" value="Submit" />
        </form>
      </div>
    </div>
)

const Overview = () => (
  <h1>This is where projects will be</h1>
)

const LoginState = () => (
  <Link className={[styles.navlink, styles.navlinkloginstatus].join(' ')}
    id="nav-link-loginstatus" to="/login">Log In</Link>
)


// TODO: make navbar fixed and remaining page start at 50px
const Navigation = () => (
  <Router>
    <div>
      <div className={styles.navbar}>
        <Link className={[styles.navlink, styles.navlinklogo].join(' ')}
          id="nav-link-logo" to="/">PROTRACKT</Link>
        <LoginState />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/overview" component={Overview} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

export default Navigation;
