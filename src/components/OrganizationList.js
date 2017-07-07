import React from 'react';
import OrganizationItem from './OrganizationItem';

const OrganizationList = (props) => {
  const organizationItems = props.organizations.orgs.map((organization) => {
    console.log(organization.name);
    return (
      <OrganizationItem
      key="923989jdjs98api3rjkla"
      name={organization.name} />
    )
  })

  return (
    <div className="main-container">
      <ul>
        { organizationItems }
      </ul>
    </div>
  )
};

export default OrganizationList;
