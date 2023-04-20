import React, { useState } from 'react';

function PDFViewer(props) {
  const [isPDFOpened, setIsPDFOpened] = useState(false);

  const openPDF = () => {
    setIsPDFOpened(true);
    window.open(props.url, '_blank', 'width=800,height=600');
  };

  return (
    <div>
      <button className='pdf-btn' onClick={openPDF}>Abrir PDF</button>
      {isPDFOpened && <p>PDF abierto</p>}
    </div>
  );
}

export default PDFViewer;