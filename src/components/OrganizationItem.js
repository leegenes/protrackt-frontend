import React from 'react';
import PropTypes from 'prop-types';

import './organization_item.css'

const OrganizationItem = (props) => {
  return (
    <div className="flex-list-item org-level">
      <div className="flex-list-item header org-level">
        <div className="flex-header-item org-level">{ props.name.toUpperCase() }</div>
        <div className="flex-header-item org-level">v</div>
      </div>
      <div className="flex-list-item org-level">
        <div className="exp-flex-list role-level">
          <div className="flex-list-item header role-level">
            <div className="flex-header-item role-level"> A ROLE </div>
            <div className="flex-header-item role-level">v</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OrganizationItem;

OrganizationItem.propTypes = {
  name: PropTypes.string.isRequired
}
