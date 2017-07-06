import React from 'react';

import ModalSignIn from './ModalSignIn';

const ModalWheelhouse = (props) => {
  switch (props.currentModal) {
    case 'EXPORT_DATA':
      return <SignIn {...props}/>;

    default:
      return null;
    }
};

export default ModalWheelhouse;
