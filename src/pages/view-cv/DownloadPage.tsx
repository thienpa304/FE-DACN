import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from '@mui/material';

export function DownloadPage({ rootElementId, downloadFileName }) {
  const downloadFileDocument = () => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 50, 550, 1000);
      pdf.save(downloadFileName);
      window.open(pdf.output('bloburl'), '_blank');
    });
  };
  return <Button onClick={downloadFileDocument}>Download Page</Button>;
}
