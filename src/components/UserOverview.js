import React from 'react';

const UserOverview = (props) => (
  if (!props.isAuth) {
    return (
      <button type="button">Sign In</button>
    )
  }
  return (
    <button type="button">Lee</button>
  )
)
