import React from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'

class Router extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
        >
        Count: {this.state.count}
      </button>
    );
  }
}

export default Router;
