import React from 'react';
import PropTypes from 'prop-types';

import ModalSignIn from './ModalSignIn';

const ModalWheelhouse = (props) => {
  switch (props.currentModal) {
    case 'SIGN_IN':
      return <ModalSignIn {...props}/>;

    default:
      return null;
    }
};

export default ModalWheelhouse;

ModalWheelhouse.propTypes = {
  currentModal: PropTypes.string,
  requestClose: PropTypes.func.isRequired
}
