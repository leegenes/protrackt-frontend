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
    <div className="exp-flex-list type-level">
      <div className="flex-list-item type-level">
        <div className="flex-list-item header">
          <div className="flex-header-item">WORK EXPERIENCE</div>
          <div className="flex-header-item">v</div>
        </div>
        <div className="exp-flex-list org-level">
          { organizationItems }
        </div>
      </div>
      <div className="flex-list-item type-level">
        <div className="flex-list-item header">
          <div className="flex-header-item">EDUCATION</div>
          <div className="flex-header-item">v</div>
        </div>
        <div className="exp-flex-list org-level">
          { organizationItems }
        </div>
      </div>
    </div>
  )
};

export default OrganizationList;

OrganizationList.propTypes = {
  organizations: PropTypes.object.isRequired
}
