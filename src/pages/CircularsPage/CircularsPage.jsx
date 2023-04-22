import React from "react";
import "./CircularsPage.scss";
import circular1 from "./../../assets/pdf/Reglamento Competición.pdf";
import circular2 from "./../../assets/pdf/REGIMEN DISCIPLINARIO SELECCION ANDALUZA SUB-21 (1).pdf";
import circular3 from "./../../assets/pdf/Normas para acelerar los encuentros (1).pdf";
import circular4 from "./../../assets/pdf/Circular inscripción a las Ligas Categorías Menores.pdf";
import circular5 from "./../../assets/pdf/BASESLigasANDALUZAS2023.pdf";
import circular6 from "./../../assets/pdf/CIRCULAR 001-23 FABS_signed.pdf";
import circular7 from "./../../assets/pdf/CIRCULAR 002-23 FABS RGC y Bases_signed.pdf";
import circular8 from "./../../assets/pdf/CIRCULAR 003- 23 inscripción a las Ligas Andaluzas 23_signed (1).pdf";
import circular9 from "./../../assets/pdf/CIRCULAR 004-23_signed (1).pdf";
import circular10 from "./../../assets/pdf/CIRCULAR 005-2023 (1).pdf";
import circular11 from "./../../assets/pdf/CIRCULAR 006-23 (1).pdf";
import { PdfViewer } from "../../components";

const CircularsPage = () => {
  return (
    <div className="competitions__block">
       <h2 className="competitions__block__title">Circulares:</h2>
      <div className="competitions__container">
        <div className="competitions__pdf">
          <h2 className="competitions__title">CIRCULAR 001-23 FABS_signed:</h2>
          <PdfViewer url={circular6} />
        </div>
        <div className="competitions__pdf">
          <h2 className="competitions__title">
            CIRCULAR 002-23 FABS RGC y Bases_signed:
          </h2>
          <PdfViewer url={circular7} />
        </div>
        <div className="competitions__pdf">
          <h2 className="competitions__title">
            CIRCULAR 003- 23 inscripción a las Ligas Andaluzas 23_signed:
          </h2>
          <PdfViewer url={circular8} />
        </div>
        <div className="competitions__pdf">
          <h2 className="competitions__title">CIRCULAR 004-23_signed:</h2>
          <PdfViewer url={circular9} />
        </div>
        <div className="competitions__pdf">
          <h2 className="competitions__title">CIRCULAR 005-2023:</h2>
          <PdfViewer url={circular10} />
        </div>
        <div className="competitions__pdf">
          <h2 className="competitions__title">CIRCULAR 006-23:</h2>
          <PdfViewer url={circular11} />
        </div>
      </div>
    </div>
  );
};

export default CircularsPage;
