import React from 'react';

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
