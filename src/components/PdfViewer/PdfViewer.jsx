import React, { useState } from "react";
import "./PdfViewer.scss";
import { AiOutlineCloudDownload } from "react-icons/ai";

function PDFViewer(props) {
  const [isPDFOpened, setIsPDFOpened] = useState(false);

  const openPDF = () => {
    setIsPDFOpened(true);
    window.open(props.url, "_blank", "width=800,height=600");
  };

  return (
    <div className="pdf-container">
      <button className="pdf-btn" onClick={openPDF}>
        <AiOutlineCloudDownload className="pdf-icon" />
        <p className="pdf-txt">Abrir PDF</p>
      </button>
      {isPDFOpened && <p>PDF abierto</p>}
    </div>
  );
}

export default PDFViewer;
