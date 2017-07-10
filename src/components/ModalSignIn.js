import React from 'react';
import PropTypes from 'prop-types';

import ModalWrap from './ModalWrap';

const ModalSignIn = (props) => {
  return (
  <ModalWrap
      {...props}
      title="Sign in"
  >
  <p>Welcome back!</p>
    <form className="signin-form">
      <input className="signin-input"
        type="text"
        name="signin-email"
        placeholder="myemail@me.com" />
      <input className="signin-input"
        type="password"
        name="signin-password"
        placeholder="superdupersecurepassword" />
      <button className="signin-submit" type="submit">Sign in</button>
    </form>

  </ModalWrap>
  )
};

export default ModalSignIn;

ModalSignIn.propTypes = {
  currentModal: PropTypes.string,
  requestClose: PropTypes.func.isRequired
}
