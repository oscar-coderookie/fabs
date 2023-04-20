import React from "react";
import "./ContactPage.scss";
import { BiCurrentLocation, BiInfoSquare, BiMailSend, BiMobileAlt } from "react-icons/bi";

const ContactPage = () => {
  return (
    <div className="contact__block">
      <div className="contact-info">
        <h2 className="contact-info__title">INFORMACIÓN DE CONTACTO:</h2>
        <ul className="contact-info__list">
          <li className="contact-info__item">
            <BiCurrentLocation className="contact-info__icon" />
            <span className="contact-info__text">
              C/ Huelva S/N. Escuela Taller. Benamejí 14910 (Córdoba)
            </span>
          </li>
          <li className="contact-info__item">
            <BiInfoSquare className=" contact-info__icon" />
            <span className="contact-info__text">CIF. G41536970</span>
          </li>
          <li className="contact-info__item">
            <BiInfoSquare className=" contact-info__icon"/>
            <span className="contact-info__text">
              Inscripción en el RAED : 24/05/1993 N° 099054
            </span>
          </li>
          <li className="contact-info__item">
            <BiMobileAlt className="contact-info__icon"/>
            <span className="contact-info__text">
              Móvil presidente: 669662055
            </span>
          </li>
          <li className="contact-info__item">
            <BiMailSend className=" contact-info__icon"/>
            <span className="contact-info__text">Mail presidente: presidente@fabs.es</span>
          </li>
          <li className="contact-info__item">
          <BiMobileAlt className="contact-info__icon"/>
            <span className="contact-info__text">
              Móvil secretaría: 623490284
            </span>
          </li>
          <li className="contact-info__item">
          <BiMailSend className=" contact-info__icon"/>
            <span className="contact-info__text">Mail Secretaria: secretaria@fabs.es</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
