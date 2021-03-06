import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
{/* component imports */}
import Navigation from '../components/Navigation';
import ModalWheelhouse from '../components/ModalWheelhouse';
import OrganizationList from '../components/OrganizationList';
import ProjectCreator from '../components/ProjectCreator';
import ExperienceList from '../components/ExperienceList';

import '../styles/app.css';

class App extends React.Component {
  render() {
    return(
      <div className="main">
        <Navigation selectedModal={ selectedModal => this.props.actions.openModal({selectedModal}) } />
        <div className="primary-view">
        <ModalWheelhouse currentModal={ this.props.currentModal }
          requestClose={ () => this.props.actions.closeModal(this.props.currentModal) }/>
        {/* <ProjectCreator organizations={ this.props.organizations }/> */}
        {/*<OrganizationList organizations={ this.props.organizations }/>*/}
        <ExperienceList items={this.props.organizations} currentItemType="orgs" />
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    currentModal: state.modal.currentModal,
    organizations: state.organizations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
