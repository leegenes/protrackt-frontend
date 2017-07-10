import React from 'react';

import './organization_item.css'

const OrganizationItem = (props) => {
  return (
    <div className="org-header">
      { props.name }
    </div>
  )
}
export default OrganizationItem;
