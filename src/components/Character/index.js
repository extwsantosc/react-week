import './character.css'

import React from 'react';
import PropTypes from 'prop-types';
import Image from './character.png'

export const Character = ({ name }) => {

  const imgEl = React.useRef(null);
  const [_, setLoc] = React.useState(0);

  const onKeyPress = (evt) => {
    if(evt.key === 'ArrowLeft') {
      setLoc((freshLoc) => {
        const newLocation = freshLoc - 10;
        imgEl.current.style = `left: ${newLocation}px; transform: scaleX(-1) scale(0.7);`;
        return newLocation;
      });

    }
    if(evt.key === 'ArrowRight') {
      setLoc((freshLoc) => {
        const newLocation = freshLoc + 10;
        imgEl.current.style = `left: ${newLocation}px`;
        return newLocation;
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    }
  }, [])
  return (
    <div className='container--animation'>
      <div className='container--character'>
        <img ref={imgEl} className='character' src={Image} alt='Among Us Character'/>
      </div>
      <div className='container--character-name'>
        <span className='character-name'>{name}</span>
      </div>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
}
