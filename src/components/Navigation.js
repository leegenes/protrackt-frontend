import React from 'react';
import PropTypes from 'prop-types';

import './navigation.css';

const Navigation = (props) => {
  return (
      <div className="nav-container">
        <div className="nav-contents">
        <div className="nav-link" id="nav-link-login">PROTRACKT</div>
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

Navigation.propTypes = {
  selectedModal: PropTypes.func.isRequired
}
