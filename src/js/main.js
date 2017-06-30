import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    React.createElement(Router),
    document.getElementById('mount')
  );
});
