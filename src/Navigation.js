import React from 'react';
import css from './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li id="nav-logo"><a href="#">Protrackt</a></li>
        <li id="login-status"></li>
      </ul>
    );
  }
}

export default Navigation;
