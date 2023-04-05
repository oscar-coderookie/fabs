import React from 'react';
import './CookieBanner.scss';

const CookieBanner = ({onAccept}) => {
  return (
    <div className="cookie-banner">
      <p>Este sitio web utiliza cookies para mejorar su experiencia de navegación. Al continuar navegando, acepta el uso de cookies.</p>
      <button onClick={onAccept}>Aceptar</button>
      <a href="/politica-de-cookies">Más información</a>
    </div>
  )
}

export default CookieBanner