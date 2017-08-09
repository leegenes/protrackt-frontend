import React from 'react';
import PropTypes from 'prop-types';

import ExperienceList from './ExperienceList';

const ListItem = (props) => {
  return (
    <div className="flex-list-item type-level">
      <div className="flex-list-item header">
        <div className="flex-header-item">{ props.name }</div>
        <div className="flex-header-item">v</div>
      </div>
      <div className="exp-flex-list org-level">
        { (props.children) &&
         <ExperienceList items={ props.children }/>}
      </div>
    </div>
  )
}
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array,
  isExpanded: PropTypes.bool
}
