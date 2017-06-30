import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    React.createElement(Navigation),
    document.getElementById('mount')
  );
});
