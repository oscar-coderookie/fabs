import React from "react";
import './CompetitionsPage.scss';
import softbolMixto from './../../assets/pdf/Calendario Liga Andaluza Sófbol Mixto 2023.pdf'
import calendar2023 from './../../assets/pdf/Calendario 2023.pdf';
import calendarSub18 from './../../assets/pdf/Calendario Liga Andaluza Sub18 2023.pdf';
import calendarSub12 from './../../assets/pdf/Liga Andaluza Sub14 y Sub12 2023.pdf';
import { PdfViewer } from "../../components";

const CompetitionsPage = () => {
  return (
    <div className="competitions__block">
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario 2023</h2>
       <PdfViewer url={calendar2023} />
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario Liga andaluza sófbol mixto 2023</h2>
       <PdfViewer url={softbolMixto}/>
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">calendario liga andaluza sub14 y sub12 2023</h2>
       <PdfViewer url={calendarSub12}/>
      </div>
      <div className="competitions__pdf">
        <h2 className="competitions__title">Calendario Liga andaluza sub18 2023</h2>
       <PdfViewer url={calendarSub18}/>
      </div>
    </div>
  );
};

export default CompetitionsPage;
