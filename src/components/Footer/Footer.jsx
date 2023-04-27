import React from "react";
import "./Footer.scss";
import febsLogo from "./../../assets/img/febs.png";
import JaLogo from "./../../assets/img/junta-de-andalucia.png";
import ChrisRosas from './../../assets/img/logo-blanco.png';
import benamejiLogo from "./../../assets/img/benameji.png"

const Footer = () => {
  return (
    <div className="footer__block">
      <div className="footer__sponsors">
        <p className="footer__sponsortitle">Colaboran:</p>
        <div className="footer__sponsors__list">
          <img className="footer__sponsors__logosmall" src={febsLogo} alt="febs-logo" />
          <img className="footer__sponsors__logosmall" src={ChrisRosas} alt="chris-logo" />
          <img className="footer__sponsors__logosmall" src={JaLogo} alt="ja-logo" />
          <img className="footer__sponsors__logosmall" src="https://82consejos.es/wp-content/uploads/2020/09/LOGOTIPO-AYTO-DE-BENAMEJI-300x212-1.png" alt={benamejiLogo} />
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
