import './title.css';

import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return (
    <div className='container--title'>
      <span className='title'>{text}</span>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}
