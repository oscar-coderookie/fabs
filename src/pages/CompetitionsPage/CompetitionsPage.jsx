import React from "react";
import './CompetitionsPage.scss';
import softbolMixto from './../../assets/pdf/Calendario Liga Andaluza Sófbol Mixto 2023.pdf'
import calendar2023 from './../../assets/pdf/Calendario 2023.pdf';
import calendarSub18 from './../../assets/pdf/Calendario Liga Andaluza Sub18 2023.pdf';
import calendarSub12 from './../../assets/pdf/Liga Andaluza Sub14 y Sub12 2023.pdf';

const CompetitionsPage = () => {

  return (
    <div className="competitions__block">
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario 2023</h2>
      <object
        type="application/pdf"
        data={calendar2023}
        width="100%"
        height="500px"
      >
        <p>No se puede mostrar el archivo PDF.</p>
      </object>
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario Liga andaluza sófbol mixto 2023</h2>
      <object
        type="application/pdf"
        data={softbolMixto}
        width="100%"
        height="500px"
      >
        <p>No se puede mostrar el archivo PDF.</p>
      </object>
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario Liga andaluza sub18 2023</h2>
      <object
        type="application/pdf"
        data={calendarSub18}
        width="100%"
        height="500px"
      >
        <p>No se puede mostrar el archivo PDF.</p>
      </object>
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">liga andaluza sub14 y sub12 2023</h2>
      <object
        type="application/pdf"
        data={calendarSub12}
        width="100%"
        height="500px"
      >
        <p>No se puede mostrar el archivo PDF.</p>
      </object>
      </div>
    </div>
  );
};

export default CompetitionsPage;
