import React from 'react';
import OrganizationItem from './OrganizationItem';

import './organization_list.css';

const OrganizationList = (props) => {
  const organizationItems = props.organizations.orgs.map((organization) => {
    return (
      <OrganizationItem
      key={organization.name} // Will be id
      name={organization.name} />
    )
  })

  return (
    <div className="org-list-container">
      <div className="org-list-header">
        Companies
      </div>
        { organizationItems }
    </div>
  )
};

export default OrganizationList;
