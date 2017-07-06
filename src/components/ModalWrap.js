import React from 'react';

const ModalWrap = (props) => {
  return (
    <div>
      <header>
        <h1>{ props.title }</h1>

        <button onClick={props.hideModal}>Close</button>
      </header>

      { props.children }
      
    </div>
  );
};

export default ModalWrap;
