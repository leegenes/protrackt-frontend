import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
{/* component imports */}
import Navigation from '../components/Navigation';
import ModalWheelhouse from '../components/ModalWheelhouse'
import '../styles/app.css';

class App extends React.Component {
  render() {
    return(
      <div>
        {/* component rendering */}
        <Navigation />
        <ModalWheelhouse currentModal={ this.props.currentModal }/>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    something: null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
