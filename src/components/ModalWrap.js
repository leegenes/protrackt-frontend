import React from 'react';
import PropTypes from 'prop-types';

import './modal_wrap.css';

const ModalWrap = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-header-container">
        <div className="modal-title">{ props.title }</div>

        <button className="modal-close-btn" onClick={ () => props.requestClose()}>X</button>
      </div>
      <div className="modal-children">
        { props.children }
      </div>

    </div>
  );
};

export default ModalWrap;

ModalWrap.propTypes = {
  currentModal: PropTypes.string.isRequired,
  requestClose: PropTypes.func.isRequired,
  title: PropTypes.string
}
