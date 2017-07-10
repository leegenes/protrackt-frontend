import React from 'react';
import PropTypes from 'prop-types';

import './organization_item.css'

const OrganizationItem = (props) => {
  return (
    <div className="org-header">
      { props.name }
    </div>
  )
}
export default OrganizationItem;

OrganizationItem.propTypes = {
  name: PropTypes.string.isRequired
}
