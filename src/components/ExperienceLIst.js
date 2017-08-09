import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

import './experience_list.css';

const ExperienceList = (props) => {
  const experienceItems = props.items.map((item) => {
    return(
      <ListItem key={ item.name }
        name={ item.name }
        children={ item[item['children']] } />
    )
  })
  return (
    <div className="exp-flex-list type-level">
        { experienceItems }
    </div>
  )
};
export default ExperienceList;

ExperienceList.propTypes = {
  items: PropTypes.array.isRequired,
  currentItemType: PropTypes.string
}
