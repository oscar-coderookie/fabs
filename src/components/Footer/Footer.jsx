import React from "react";
import "./Footer.scss";
import febsLogo from "./../../assets/img/febs.png";
import JaLogo from "./../../assets/img/junta-de-andalucia.png";
import csdLogo from './../../assets/img/Logo-CSD.png';
import mlbLogo from './../../assets/img/mlb-logo.png';
import olimpicsLogo from './../../assets/img/olimpics.svg';

const Footer = () => {
  return (
    <div className="footer__block">
      <div className="footer__sponsors">
        <p className="footer__sponsortitle">Colaboran:</p>
        <div className="footer__sponsors__list">
          <img className="footer__sponsors__logosmall" src={febsLogo} alt="febs-logo" />
          <img className="footer__sponsors__logosmall" src={JaLogo} alt="ja-logo" />
          <img className="footer__sponsors__logosmall" src={csdLogo} alt="csd-logo" />
          <img className="footer__sponsors__logosmall" src={olimpicsLogo} alt="csd-logo" />
          <img className="footer__sponsors__logo" src={mlbLogo} alt="mlb-logo" />
          <img className="footer__sponsors__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/79/Wbsc-logo.svg" alt="logo-wbsc" />
          <img className="footer__sponsors__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg/1280px-Logotipo_del_Ministerio_de_Cultura_y_Deporte.svg.png" alt="mincultura-logo" />
          
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Todos los derechos reservados - FABS 2023 - designed and developed by Oscar
          Serna
        </p>
      </div>
    </div>
  );
};

export default Footer;
