import React from 'react';
import PropTypes from 'prop-types';
import OrganizationItem from './OrganizationItem';

import './organization_list.css';

const OrganizationList = (props) => {
  const organizationItems = props.organizations.orgs.map((organization) => {
    return (
      <OrganizationItem
      key={organization.name} // Will be id
      name={organization.name}
      startDate={organization.start_date} />
    )
  })

  return (
    <div className="org-flex-container">
      <div className="org-list-header">
        <div className="exp-header-item">WORK EXPERIENCE</div>
        <div className="exp-header-item">v</div>
      </div>
      <div className="org-list-flex">
        { organizationItems }
      </div>
    </div>
  )
};

export default OrganizationList;

OrganizationList.propTypes = {
  organizations: PropTypes.object.isRequired
}
