import React from 'react';

import './navigation.css';

const Navigation = (props) => {
  return (
    <div>
      <div className="nav-bar">
        <a href="#" className="nav-link" id="nav-link-login">PROTRACKT</a>
        <div
          className="nav-link"
          id="nav-link-logo"
          type="button"
          onClick={ () => props.selectedModal('SIGN_IN') }>
          Sign In
        </div>
      </div>
    </div>
  )
}

export default Navigation;
