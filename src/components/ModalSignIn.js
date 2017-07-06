import React from 'react';

import ModalWrap from './ModalWrap';

const SignIn = (props) => {
  <ModalWrap
      {...props}
      title="Sign in"
      width={400}
  >
  <p>Choose your flavor</p>
      <button onClick={() => signIn('facebook')}>Facebook</button>
      <button onClick={() => signIn('google')}>Google</button>
      <button onClick={() => signIn('twitter')}>Twitter</button>
    </ModalWrap>
};

export default SignIn;
