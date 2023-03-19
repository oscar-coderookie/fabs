import React from 'react';
import './ComingSoon.scss';
import creativityLogo from './../../assets/img/creativity.png';

const ComingSoon = () => {
  return (
    <div className='comingsoon'>
      <img className='comingsoon__img' src={creativityLogo} alt="creative-logo" />
      <p className='comingsoon__legend'>Estamos trabajando para ti.</p>
      <p className='comingsoon__legend'>Próximamente ésta sección disponible...</p>
      </div>
  )
}

export default ComingSoon