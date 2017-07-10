import React from 'react';
import PropTypes from 'prop-types';

import './project_creator.css';

const ProjectCreator = (props) => {
  const organizationOptions = props.organizations.orgs.map((organization) => {
    return (
      <option className="form-option"
        key={organization.name}>
        { organization.name }
      </option>
    );
  });

  return (
    <div className="project-creator-container">
      <div className="section-header" id="creator-header">
      Add a new project
      </div>
      <form className='project-creator-form'>
        <input className="creator-field" name="project name" placeholder="Project Name"></input>
        <br/>
        <input className="creator-field" name="project description" placeholder="Project Description"></input>
        <br/>
        <select className="creator-field" name="organization">
          <option className="form-option">Add a new organization</option>
          { organizationOptions }
        </select>
      </form>
    </div>
  )
}

export default ProjectCreator;

ProjectCreator.propTypes = {
  organizations: PropTypes.object.isRequired
}
