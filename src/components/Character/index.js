import './character.css'

import React from 'react';
import PropTypes from 'prop-types';
import Image from './character.png'

export const Character = ({ name }) => {
  return (
    <>
      <div className='container--character'>
        <img className='character' src={Image} alt='Among Us Character'/>
      </div>
      <div className='container--character-name'>
        <span className='character-name'>{name}</span>
      </div>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
}
