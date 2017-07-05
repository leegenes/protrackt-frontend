import React from 'react';

const SignInForm = () => (
  <div>
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
)

function ShowSignIn(props) {
  const modalActive = props.modalActive;

  if (modalActive) {
    return <div>
        <div className='modalDialog'>
          <h2>Modal</h2>
          <p>This is a sample modal</p>
        </div>
    </div>;
  }
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
          <div className='modalDialog'>
            <h2>Modal</h2>
            <p>This is a sample modal</p>
          </div>
      </div>
    );
  }
}
export default SignIn;
