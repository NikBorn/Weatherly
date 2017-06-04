import React from 'react';
import './ErrorView.css';

const ErrorView = ({ error }) => {
  return (
    <div>
      <p>There was an error</p>
      <p>{ error }</p>
    </div>
  )
}

export default ErrorView;
