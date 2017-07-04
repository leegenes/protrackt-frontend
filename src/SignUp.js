import React from 'react';

function ReturnUserGreeting() {
  return <div>
  <h1>Welcome back!</h1>
  <h2>Sign in</h2>
  </div>;
}

function NewUserGreeting() {
  return <div>
  <h1>Wow! We are excited you are here!</h1>
  <h2>Sign up</h2>
  </div>;
}

function Greeting(props) {
  const isUser = props.isUser;
  if (isUser) {
    return ReturnUserGreeting;
  }
  return NewUserGreeting;
}

const SignUpInForm = () => (
  <div>
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
  </div>
)

class SignUpIn extends React.Component {
  render () {
    <div>
      <Greeting isUser={props.isUser} />
      <Form />
    </div>
  };
}
export default SignUpIn;
