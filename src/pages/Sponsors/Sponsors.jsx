import React from 'react';
import './Sponsors.scss';
import logoChris from './../../assets/img/logo-chris.png';

const Sponsors = () => {
  return (
    <div className='sponsors__block'>
        <h1 className='sponsors__title'>Patrocinadores oficiales:</h1>
        <div className="sponsors__block">
        <div className="sponsors__info">
               <p className="sponsors__name">Chris Rosas Entertainment</p> 
               <a href='https://www.chrisrosasentertainment.com' target="_blank" className="sponsors__web">www.chrisrosasentertainment.com</a>
            </div>
            <img className='sponsors__logo' src={logoChris} alt="chrisrosas-logo" />
        </div>
    </div>
  )
}

export default Sponsors