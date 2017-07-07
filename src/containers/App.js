import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
{/* component imports */}
import Navigation from '../components/Navigation';
import ModalWheelhouse from '../components/ModalWheelhouse'

class App extends React.Component {
  render() {
    return(
      <div>
        {/* component rendering */}
        <Navigation selectedModal={ selectedModal => this.props.actions.openModal({selectedModal}) } />
        <ModalWheelhouse currentModal={ this.props.currentModal }
          requestClose={ () => this.props.actions.closeModal(this.props.currentModal) }/>

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentModal: state.modal.currentModal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
