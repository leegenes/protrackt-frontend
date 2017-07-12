import React from 'react';
import PropTypes from 'prop-types';

import './organization_item.css'

const OrganizationItem = (props) => {
  return (
    <div className="org-header">
      <div className="org-header-item">{ props.name.toUpperCase() }</div>
      <div className="org-header-item">v</div>
    </div>
  )
}
export default OrganizationItem;

OrganizationItem.propTypes = {
  name: PropTypes.string.isRequired
}
