import React from 'react';

const ErrorMsg = ({error}) => {
  return (
    <p className='error-style'>{error}</p>
  );
};

export default ErrorMsg;